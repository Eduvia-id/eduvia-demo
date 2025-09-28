"use client";

import React, { Suspense } from 'react';
import { useQueryState } from "nuqs";
import { CoursePackage, CoursePackageTable } from "../../_components/tables/course-package-table";
import { useState } from "react";
import { HiPlus } from "react-icons/hi";
import { Button } from "@/app/_components/button";
import SearchInput from "../../_components/forms/search-input";
import Select from "../../_components/forms/select";

const initialData: CoursePackage[] = [
  {
    id: 1,
    nama: 'SKD Full Paket',
    jenis: 'SKD',
    harga: 249000,
    durasi: '30 Hari',
    status: 'Aktif',
    materi: 'Lihat'
  },
  {
    id: 2,
    nama: 'SKB Formasi Guru',
    jenis: 'SKB',
    harga: 199000,
    durasi: '30 Hari',
    status: 'Nonaktif',
    materi: 'Upload'
  },
  {
    id: 3,
    nama: 'SKD Basic Paket',
    jenis: 'SKD',
    harga: 149000,
    durasi: '14 Hari',
    status: 'Aktif',
    materi: 'Lihat'
  },
  {
    id: 4,
    nama: 'SKB Tenaga Kesehatan',
    jenis: 'SKB',
    harga: 199000,
    durasi: '30 hari',
    status: 'Aktif',
    materi: 'Lihat'
  },
  {
    id: 5,
    nama: 'SKD Basic Paket 2',
    jenis: 'SKD',
    harga: 149000,
    durasi: '14 Hari',
    status: 'Aktif',
    materi: 'Lihat'
  }
];

// Separate component that uses the query state hooks
function CoursePackageContent() {
  const [searchQuery, setSearchQuery] = useQueryState('search', { defaultValue: '' });
  const [jenisFilter, setJenisFilter] = useQueryState('jenis', { defaultValue: '' });
  const [data] = useState<CoursePackage[]>(initialData);

  // Filter data based on search and filters
  const filteredData = data.filter(item => {
    const matchesSearch = item.nama.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesJenis = jenisFilter === '' || item.jenis === jenisFilter;
    return matchesSearch && matchesJenis;
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Paket Belajar</h1>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Search Input */}
        <SearchInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 max-w-md"
          placeholder="Cari nama paket belajar..."
        />

        {/* Filters and Actions */}
        <div className="flex gap-3">
          {/* Filters */}
          <Select
            options={[
              { value: 'SKD', label: 'SKD' },
              { value: 'SKB', label: 'SKB' }
            ]}
            placeholder="Jenis Paket"
            value={jenisFilter}
            onChange={(e) => setJenisFilter(e.target.value)}
          />

          {/* Action Buttons */}
          <Button href='/paket/add'>
            <HiPlus className="h-4 w-4" />
            Tambah Paket Belajar
          </Button>
        </div>
      </div>

      <CoursePackageTable
        data={filteredData}
        emptyMessage="Tidak ada data yang ditemukan"
      />
    </div>
  );
}

// Loading fallback component
function CoursePackageLoading() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Paket Belajar</h1>
      <div className="animate-pulse">
        <div className="h-10 bg-gray-200 rounded mb-4"></div>
        <div className="h-64 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}

export default function CoursePackagePage() {
  return (
    <Suspense fallback={<CoursePackageLoading />}>
      <CoursePackageContent />
    </Suspense>
  );
}