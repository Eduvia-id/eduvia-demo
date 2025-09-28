import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/app/_components/button';
import Input from '@/app/_components/input';
import { HiEnvelope, HiLockClosed } from 'react-icons/hi2';

export default function Login() {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="hidden lg:block flex-1 h-screen bg-white">
        <div className='bg-sapphire-normal rounded-br-[8rem] h-full text-white flex flex-col justify-center px-16 gap-4'>
          <h1 className="text-5xl font-semibold">
            Selamat Datang Kembali
          </h1>
          <p className="text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Image
            alt='Image Login'
            src='/images/img-login.png'
            width={400}
            height={400}
            className='mx-auto'
          />
        </div>
      </div>
      <div className="flex-1 h-screen bg-sapphire-normal">
        <div className="bg-white rounded-tl-[8rem] h-full flex flex-col justify-center px-8 lg:px-16 gap-4 py-12">
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

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Belum pernah daftar?{' '}
              <Link href="/signup" className="font-medium text-salmon-normal hover:text-salmon-normal-hover">
                Daftar disini
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
