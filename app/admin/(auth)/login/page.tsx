import React from 'react';
import Image from 'next/image';
import { Button } from '@/app/_components/button';
import Input from '@/app/_components/input';
import { HiEnvelope, HiLockClosed } from 'react-icons/hi2';

export default function Login() {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="hidden lg:flex flex-5 h-screen bg-sapphire-normal text-white flex-col justify-center px-16 gap-4">
        <h1 className="text-4xl font-semibold">
          Selamat Datang Kembali Admin
        </h1>
        <p className="text-md">
          Kelola data siswa, materi pembelajaran, jadwal kelas, dan tryout CPNS hanya dalam satu tempat. Sistem ini dirancang agar Anda sebagai admin dapat bekerja lebih cepat, efisien, dan akurat.
        </p>
        <Image
          alt='Image Login'
          src='/images/img-login.png'
          width={380}
          height={380}
          className='mx-auto'
        />

      </div>
      <div className="flex-6 h-screen bg-white flex flex-col justify-center px-8 lg:px-16 gap-4 py-12">
        <Image
          alt='Eduvia Logo'
          src='/icons/logo-full.svg'
          width={208}
          height={65}
          className='w-52 mx-auto'
        />
        <div>
          <h2 className="text-3xl font-semibold text-sapphire-normal">
            Login Akun
          </h2>
          <p className="text-sm text-[#777777]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <form className="space-y-2">
          <div>
            <label htmlFor="email" className="block text-black text-md font-semibold mb-1">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              leftIcon={<HiEnvelope className="h-5 w-5" />}
              placeholder="Masukkan email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-black text-md font-semibold mb-1">
              Password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              leftIcon={<HiLockClosed className="h-5 w-5" />}
              placeholder="Masukkan password"
              required
            />
          </div>

          <div className='pt-2'>
            <Button className='w-full'>
              Login
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
