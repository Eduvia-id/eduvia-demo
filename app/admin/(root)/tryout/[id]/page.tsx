'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { HiChevronLeft, HiPlus } from 'react-icons/hi';
import Link from 'next/link';
import Input from '@/app/admin/_components/forms/input';
import Select from '@/app/admin/_components/forms/select';
import FileUpload from '@/app/admin/_components/forms/file-upload';
import Textarea from '@/app/admin/_components/forms/textarea';
import { Button } from '@/app/_components/button';

interface TryoutData {
  id: number;
  judulTryout: string;
  jenis: 'SKD' | 'SKB';
  durasiWaktu: string;
  status: 'Aktif' | 'Nonaktif';
  fotoBanner?: string;
  deskripsi?: string;
}

// Dummy data tryout
const dummyTryoutData: TryoutData[] = [
  {
    id: 1,
    judulTryout: 'Tryout SKD #1',
    jenis: 'SKD',
    durasiWaktu: '90 Menit',
    status: 'Aktif',
    deskripsi: 'Tryout SKD lengkap dengan 100 soal untuk persiapan CPNS'
  },
  {
    id: 2,
    judulTryout: 'Tryout SKB Guru #1',
    jenis: 'SKB',
    durasiWaktu: '60 Menit',
    status: 'Nonaktif',
    deskripsi: 'Tryout SKB khusus formasi guru dengan soal-soal terkini'
  },
  {
    id: 3,
    judulTryout: 'Tryout SKB Mini #1',
    jenis: 'SKD',
    durasiWaktu: '45 Menit',
    status: 'Aktif',
    deskripsi: 'Tryout singkat untuk latihan cepat'
  }
];

// Select options
const jenisTryoutOptions = [
  { value: 'SKD', label: 'SKD' },
  { value: 'SKB', label: 'SKB' }
];

const statusTryoutOptions = [
  { value: 'Aktif', label: 'Aktif' },
  { value: 'Nonaktif', label: 'Nonaktif' }
];

export default function TryoutForm() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;
  const isEdit = id && id !== 'add';

  const [formData, setFormData] = useState({
    judulTryout: '',
    jenis: '' as 'SKD' | 'SKB' | '',
    durasiWaktu: '',
    fotoBanner: null as File | null,
    deskripsi: '',
    status: '' as 'Aktif' | 'Nonaktif' | ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isEdit) {
      const tryoutData = dummyTryoutData.find(item => item.id === parseInt(id));
      if (tryoutData) {
        setFormData({
          judulTryout: tryoutData.judulTryout,
          jenis: tryoutData.jenis,
          durasiWaktu: tryoutData.durasiWaktu,
          fotoBanner: null,
          deskripsi: tryoutData.deskripsi || '',
          status: tryoutData.status
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

    if (!formData.judulTryout.trim()) {
      newErrors.judulTryout = 'Judul tryout harus diisi';
    }

    if (!formData.jenis) {
      newErrors.jenis = 'Jenis tryout harus dipilih';
    }

    if (!formData.durasiWaktu.trim()) {
      newErrors.durasiWaktu = 'Durasi waktu harus diisi';
    }

    if (!formData.status) {
      newErrors.status = 'Status tryout harus dipilih';
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

      console.log('Tryout Form Data:', formData);

      // Redirect ke halaman tryout setelah berhasil
      router.push('/tryout');
    } catch (error) {
      console.error('Error submitting tryout form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="mb-6 flex items-center gap-4">
        <Link href='/tryout'>
          <HiChevronLeft className="h-8 w-8 text-salmon-normal hover:text-salmon-dark transition-colors cursor-pointer" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">
          {isEdit ? 'Edit Tryout' : 'Input Tryout'}
        </h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Judul Tryout */}
        <Input
          label="Judul Tryout"
          name="judulTryout"
          value={formData.judulTryout}
          onChange={handleInputChange}
          placeholder="Masukkan judul tryout"
          error={errors.judulTryout}
          required
        />

        {/* Jenis Tryout */}
        <Select
          label="Jenis Tryout"
          name="jenis"
          value={formData.jenis}
          onChange={handleInputChange}
          options={jenisTryoutOptions}
          placeholder="Pilih jenis tryout"
          error={errors.jenis}
          required
        />

        {/* Durasi Waktu */}
        <Input
          label="Durasi Waktu"
          name="durasiWaktu"
          value={formData.durasiWaktu}
          onChange={handleInputChange}
          placeholder="Masukkan durasi waktu (contoh: 90 Menit)"
          error={errors.durasiWaktu}
          required
        />

        {/* Foto Banner */}
        <FileUpload
          label="Foto Banner"
          fileType="image"
          value={formData.fotoBanner}
          onChange={handleFileChange}
          placeholder="Pilih file gambar untuk banner tryout"
        />

        {/* Status Paket */}
        <Select
          label="Status Paket"
          name="status"
          value={formData.status}
          onChange={handleInputChange}
          options={statusTryoutOptions}
          placeholder="Pilih status tryout"
          error={errors.status}
          required
        />

        {/* Deskripsi */}
        <Textarea
          label="Deskripsi"
          name="deskripsi"
          value={formData.deskripsi}
          onChange={handleInputChange}
          rows={4}
          placeholder="Masukkan deskripsi tryout"
        />

        {/* Action Buttons */}
        <div className="flex justify-end gap-3">

          {isEdit &&
            <Button
              type="button"
              variant='outline'
              href={`/tryout/${id}/question`}
              className="w-auto"
            >
              <HiPlus /> Lanjut Input Soal
            </Button>
          }


          <Button
            type="submit"
            disabled={isLoading}
            className="w-auto"
          >
            {isLoading ? 'Menyimpan...' : 'Simpan'}
          </Button>
        </div>
      </form>
    </div>
  );
}