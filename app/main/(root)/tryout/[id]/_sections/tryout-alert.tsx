import React from 'react';

export default function TryoutAlert() {
  return (
    <section className='px-6 sm:px-8 lg:px-12 my-6'>
      <div className="bg-salmon-light py-4 px-6 rounded-lg">
        <div className="text-salmon-normal">
          <p className="font-semibold text-lg mb-2">PERHATIAN</p>
          <ul className="space-y-1 text-sm">
            <li>• Tryout ini hanya bisa dikerjakan sekali.</li>
            <li>• Waktu akan berjalan mundur secara otomatis.</li>
            <li>• Kamu tidak bisa kembali ke soal sebelumnya.</li>
            <li>• Jangan refresh atau keluar dari halaman saat pengerjaan berlangsung</li>
          </ul>
        </div>
      </div>
    </section>
  );
}