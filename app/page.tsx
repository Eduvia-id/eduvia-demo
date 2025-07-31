import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">

      <div className="flex flex-col md:flex-row items-center gap-6 rounded-xl bg-blue-500 text-white max-w-3xl mx-auto overflow-hidden">
        <Image
          src="/placeholder-student.png"
          alt="Student"
          width={300}
          height={500}
          className="relative top-2"
        />

        {/* Konten teks di sisi kanan */}
        <div className="p-5">
          <Image
            src="/logo.png"
            alt="Logo"
            width={150}
            height={50}
            className="mb-4 rounded-sm"
          />
          <h2 className="text-2xl md:text-4xl font-bold">
            Kami Akan Segera Hadir
          </h2>
        </div>
      </div>

    </div>
  );
}
