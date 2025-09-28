"use client";

import { useQueryState } from "nuqs";
import TryoutTable, { TryoutData } from "../../_components/tables/tryout-table";
import { Suspense, useState } from "react";
import { HiPlus } from "react-icons/hi";
import { Button } from "@/app/_components/button";
import SearchInput from "../../_components/forms/search-input";
import Select from "../../_components/forms/select";

const initialData: TryoutData[] = [
  {
    id: 1,
    namaPaket: 'Tryout SKD #1',
    jenis: 'SKD',
    durasi: '90 Menit',
    soal: '100 Soal',
    status: 'Aktif'
  },
  {
    id: 2,
    namaPaket: 'Tryout SKB Guru #1',
    jenis: 'SKB',
    durasi: '60 Menit',
    soal: 'Input Soal',
    status: 'Nonaktif'
  },
  {
    id: 3,
    namaPaket: 'Tryout SKB Mini #1',
    jenis: 'SKD',
    durasi: '45 Menit',
    soal: '50 Soal',
    status: 'Aktif'
  },
  {
    id: 4,
    namaPaket: 'Tryout SKB Nakes #1',
    jenis: 'SKB',
    durasi: '75 Menit',
    soal: '60 Soal',
    status: 'Aktif'
  },
  {
    id: 5,
    namaPaket: 'Tryout SKD Latihan Soal',
    jenis: 'SKD',
    durasi: '30 Menit',
    soal: '40 Soal',
    status: 'Aktif'
  }
];

// Separate component that uses the query state hooks
function TryoutContent() {
  const [searchQuery, setSearchQuery] = useQueryState('search', { defaultValue: '' });
  const [jenisFilter, setJenisFilter] = useQueryState('jenis', { defaultValue: '' });
  const [data] = useState<TryoutData[]>(initialData);

  const filteredData = data.filter(item => {
    const matchesSearch = item.namaPaket.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesJenis = jenisFilter === '' || item.jenis === jenisFilter;
    return matchesSearch && matchesJenis;
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Tryout</h1>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Search Input */}
        <SearchInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 max-w-md"
          placeholder="Cari nama paket tryout..."
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
          <Button href='/tryout/add'>
            <HiPlus className="h-4 w-4" />
            Tambah Tryout
          </Button>
        </div>
      </div>

      <TryoutTable
        data={filteredData}
        emptyMessage="Tidak ada data tryout yang ditemukan"
      />
    </div>
  );
}

// Loading fallback component
function TryoutLoading() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Tryout</h1>
      <div className="animate-pulse">
        <div className="h-10 bg-gray-200 rounded mb-4"></div>
        <div className="h-64 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}

export default function TryoutPage() {
  return (
    <Suspense fallback={<TryoutLoading />}>
      <TryoutContent />
    </Suspense>
  );
}