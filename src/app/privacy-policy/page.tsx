import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Kebijakan Privasi | Swarakarya",
  description: "Kebijakan privasi Swarakarya - Informasi lengkap tentang bagaimana kami mengelola data Anda, kebijakan cookie, dan kepatuhan periklanan termasuk Google AdSense.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="flex-1 flex flex-col bg-[#FCFAF6] paper-texture relative min-h-screen text-navy overflow-x-hidden">
      {/* Navbar */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl mx-auto px-6 pt-36 pb-24 relative z-10">
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-gray-100 shadow-xl">
          <h1 className="font-accent text-3xl md:text-4xl font-extrabold text-navy mb-2">
            Kebijakan Privasi
          </h1>
          <div className="w-24 h-1 bg-brand-gold mb-8 rounded-full" />

          <p className="text-sm text-gray-400 mb-8">Terakhir Diperbarui: 11 Agustus 2026</p>

          <div className="space-y-8 text-sm md:text-base leading-relaxed text-gray-700">
            <section className="space-y-3">
              <h2 className="font-accent text-xl font-bold text-navy">1. Pendahuluan</h2>
              <p>
                Selamat datang di Swarakarya. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, memproses, dan membagikan informasi Anda saat Anda mengunjungi situs web kami.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-accent text-xl font-bold text-navy">2. Informasi yang Kami Kumpulkan</h2>
              <p>
                Kami dapat mengumpulkan beberapa jenis informasi untuk berbagai keperluan guna menyediakan dan meningkatkan layanan kami kepada Anda:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Data Pribadi:</strong> Nama, alamat email, nomor telepon, atau data kontak lainnya yang Anda berikan secara sukarela saat menghubungi kami atau melakukan konsultasi.
                </li>
                <li>
                  <strong>Data Penggunaan:</strong> Informasi tentang bagaimana situs web diakses dan digunakan (misalnya, alamat IP, tipe browser, halaman yang dikunjungi, waktu dan tanggal kunjungan).
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-accent text-xl font-bold text-navy">3. Kebijakan Cookies dan Teknologi Pelacakan</h2>
              <p>
                Kami menggunakan cookies dan teknologi pelacakan serupa untuk melacak aktivitas di situs web kami dan menyimpan informasi tertentu. Cookies adalah file dengan data kecil yang dikirim ke browser Anda dari situs web dan disimpan di perangkat Anda.
              </p>
              <p>
                Anda dapat menginstruksikan browser Anda untuk menolak semua cookies atau memberikan tanda saat cookie dikirim. Namun, jika Anda tidak menerima cookie, Anda mungkin tidak dapat menggunakan beberapa bagian dari layanan kami.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-accent text-xl font-bold text-navy">4. Penggunaan Data</h2>
              <p>Swarakarya menggunakan data yang dikumpulkan untuk berbagai tujuan:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Menyediakan dan memelihara layanan kami.</li>
                <li>Memberitahu Anda tentang perubahan pada layanan kami.</li>
                <li>Memungkinkan Anda untuk berpartisipasi dalam fitur interaktif layanan kami ketika Anda memilih untuk melakukannya.</li>
                <li>Memberikan analisis atau informasi berharga sehingga kami dapat meningkatkan kualitas situs web.</li>
                <li>Memantau penggunaan situs web kami.</li>
                <li>Mendeteksi, mencegah, dan mengatasi masalah teknis.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-accent text-xl font-bold text-navy">5. Keamanan Data</h2>
              <p>
                Keamanan data Anda sangat penting bagi kami, namun perlu diingat bahwa tidak ada metode transmisi melalui Internet atau metode penyimpanan elektronik yang 100% aman. Meskipun kami berusaha keras untuk menggunakan cara yang dapat diterima secara komersial untuk melindungi data pribadi Anda, kami tidak dapat menjamin keamanan mutlaknya.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-accent text-xl font-bold text-navy">6. Hubungi Kami</h2>
              <p>
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami melalui:
              </p>
              <ul className="list-none space-y-1 pl-1">
                <li>📧 Email: <span className="font-semibold text-navy">info@swarakarya.com</span></li>
                <li>📞 Telepon: <span className="font-semibold text-navy">+62 222 444 570</span></li>
                <li>📍 Alamat: Jl. Pramuka No.89, Jalakala, Wakanda, Indonesia 55901</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <div className="-mt-12 relative z-0">
        <Footer />
      </div>
    </div>
  );
}
