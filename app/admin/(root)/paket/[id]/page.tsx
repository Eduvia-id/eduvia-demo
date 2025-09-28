'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { HiChevronLeft } from 'react-icons/hi';
import Link from 'next/link';
import Input from '@/app/admin/_components/forms/input';
import Select from '@/app/admin/_components/forms/select';
import FileUpload from '@/app/admin/_components/forms/file-upload';
import Textarea from '@/app/admin/_components/forms/textarea';
import { Button } from '@/app/_components/button';

interface CoursePackage {
  id: number;
  nama: string;
  jenis: 'SKD' | 'SKB';
  harga: number;
  durasi: string;
  status: 'Aktif' | 'Nonaktif';
  fotoBanner?: string;
  deskripsi?: string;
}

// Dummy data dari komponen sebelumnya
const dummyData: CoursePackage[] = [
  {
    id: 1,
    nama: 'SKD Full Paket',
    jenis: 'SKD',
    harga: 249000,
    durasi: '30 Hari',
    status: 'Aktif',
    deskripsi: 'Paket lengkap untuk persiapan SKD dengan materi komprehensif'
  },
  {
    id: 2,
    nama: 'SKB Formasi Guru',
    jenis: 'SKB',
    harga: 199000,
    durasi: '30 Hari',
    status: 'Nonaktif',
    deskripsi: 'Paket khusus untuk formasi guru dengan materi yang disesuaikan'
  },
  {
    id: 3,
    nama: 'SKD Basic Paket',
    jenis: 'SKD',
    harga: 149000,
    durasi: '14 Hari',
    status: 'Aktif',
    deskripsi: 'Paket dasar untuk persiapan SKD dengan durasi singkat'
  }
];

// Select options
const jenisOptions = [
  { value: 'SKD', label: 'SKD' },
  { value: 'SKB', label: 'SKB' }
];

const statusOptions = [
  { value: 'Aktif', label: 'Aktif' },
  { value: 'Nonaktif', label: 'Nonaktif' }
];


export default function CoursePackageForm() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;
  const isEdit = id && id !== 'add';

  const [formData, setFormData] = useState({
    nama: '',
    jenis: '' as 'SKD' | 'SKB' | '',
    harga: '',
    durasi: '',
    fotoBanner: null as File | null,
    deskripsi: '',
    status: '' as 'Aktif' | 'Nonaktif' | ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isEdit) {
      const paketData = dummyData.find(item => item.id === parseInt(id));
      if (paketData) {
        setFormData({
          nama: paketData.nama,
          jenis: paketData.jenis,
          harga: paketData.harga.toString(),
          durasi: paketData.durasi,
          fotoBanner: null,
          deskripsi: paketData.deskripsi || '',
          status: paketData.status
        });
      }
    }
  }, [isEdit, id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFileChange = (file: File | null) => {
    setFormData(prev => ({
      ...prev,
      fotoBanner: file
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nama.trim()) {
      newErrors.nama = 'Nama paket harus diisi';
    }

    if (!formData.jenis) {
      newErrors.jenis = 'Jenis paket harus dipilih';
    }

    if (!formData.harga.trim()) {
      newErrors.harga = 'Harga paket harus diisi';
    } else if (isNaN(Number(formData.harga)) || Number(formData.harga) <= 0) {
      newErrors.harga = 'Harga harus berupa angka yang valid';
    }

    if (!formData.durasi.trim()) {
      newErrors.durasi = 'Durasi akses harus diisi';
    }

    if (!formData.status) {
      newErrors.status = 'Status paket harus dipilih';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulasi API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('Form Data:', {
        ...formData,
        harga: Number(formData.harga)
      });

      // Redirect ke halaman utama setelah berhasil
      router.push('/paket');
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="mb-6 flex items-center gap-4">
        <Link href='/paket'>
          <HiChevronLeft className="h-8 w-8 text-salmon-normal hover:text-salmon-dark transition-colors cursor-pointer" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">
          {isEdit ? 'Edit Paket Belajar' : 'Input Paket Belajar'}
        </h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nama Paket */}
        <Input
          label="Nama Paket"
          name="nama"
          value={formData.nama}
          onChange={handleInputChange}
          placeholder="Masukkan nama paket"
          error={errors.nama}
          required
        />

        {/* Jenis Paket */}
        <Select
          label="Jenis Paket"
          name="jenis"
          value={formData.jenis}
          onChange={handleInputChange}
          options={jenisOptions}
          placeholder="Pilih Jenis Paket"
          error={errors.jenis}
          required
        />

        {/* Harga Paket */}
        <Input
          label="Harga Paket"
          name="harga"
          type="text"
          value={formData.harga}
          onChange={handleInputChange}
          placeholder="Masukkan harga paket"
          error={errors.harga}
          required
        />

        {/* Durasi Akses */}
        <Input
          label="Durasi Akses"
          name="durasi"
          value={formData.durasi}
          onChange={handleInputChange}
          placeholder="Masukkan durasi akses (contoh: 30 Hari)"
          error={errors.durasi}
          required
        />

        {/* Foto Banner */}
        <FileUpload
          label="Foto Banner"
          fileType="image"
          value={formData.fotoBanner}
          onChange={handleFileChange}
          placeholder="Pilih file gambar untuk banner"
        />

        {/* Deskripsi */}
        <Textarea
          label="Deskripsi"
          name="deskripsi"
          value={formData.deskripsi}
          onChange={handleInputChange}
          rows={4}
          placeholder="Masukkan deskripsi paket belajar"
        />

        {/* Status Paket */}
        <Select
          label="Status Paket"
          name="status"
          value={formData.status}
          onChange={handleInputChange}
          options={statusOptions}
          placeholder="Pilih Status Paket"
          error={errors.status}
          required
        />

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={isLoading}
            className='w-42'
          >
            {isLoading ? 'Menyimpan...' : 'Simpan'}
          </Button>
        </div>
      </form>
    </div>
  );
}

