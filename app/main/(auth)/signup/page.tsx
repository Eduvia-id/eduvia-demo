"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/app/_components/button';
import Input from '@/app/_components/input';
import { HiEnvelope, HiLockClosed, HiPhone, HiUser } from 'react-icons/hi2';
import Checkbox from '@/app/_components/checkbox';

export default function Signup() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <section className="min-h-screen lg:max-h-screen flex justify-center items-center">
      <div className="hidden lg:block flex-1 h-screen bg-white">
        <div className='bg-sapphire-normal rounded-br-[8rem] h-full text-white flex flex-col justify-center px-16 gap-4'>
          <h1 className="text-5xl font-semibold">
            Selamat Datang
          </h1>
          <p className="text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Image
            alt='Image Register'
            src='/images/img-register.png'
            width={400}
            height={400}
            className='mx-auto'
          />
        </div>
      </div>
      <div className="flex-1 h-screen bg-sapphire-normal">
        <div className="bg-white rounded-tl-[8rem] h-full flex flex-col justify-center px-8 lg:px-16 gap-2 py-4 max-h-screen">
          <Image
            alt='Eduvia Logo'
            src='icons/logo-full.svg'
            width={208}
            height={65}
            className='w-52 mx-auto'
          />
          <div>
            <h2 className="text-3xl font-semibold text-sapphire-normal">
              Daftar Akun
            </h2>
            <p className="text-sm text-[#777777]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <form className="space-y-2">
            <div>
              <label htmlFor="fullname" className="block text-black text-md font-semibold mb-1">
                Nama Lengkap
              </label>
              <Input
                id="fullname"
                name="fullname"
                type="text"
                leftIcon={<HiUser className="h-5 w-5" />}
                placeholder="Masukkan nama lengkap"
              />
            </div>

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
              <label htmlFor="phone" className="block text-black text-md font-semibold mb-1">
                No Handphone
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                leftIcon={<HiPhone className="h-5 w-5" />}
                placeholder="Masukkan nomor handphone"
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

            <div className='flex gap-2 text-xs items-center text-gray-500'>
              <Checkbox checked={isChecked} onChange={setIsChecked} />
              <label>Saya telah membaca dan menyetujui <Link href='/kebijakan-privasi' target='_blank' className='font-medium text-salmon-normal'>Kebijakan Privasi</Link> & <Link href='/syarat-ketentuan' target='_blank' className='font-medium text-salmon-normal'>Syarat & Ketentuan</Link> dari Eduvia.id
              </label>
            </div>

            <div className='pt-2'>
              <Button className='w-full'>
                Daftar
              </Button>
            </div>
          </form>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Sudah pernah daftar?{' '}
              <Link href="/login" className="font-medium text-salmon-normal hover:text-salmon-normal-hover">
                Login disini
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

