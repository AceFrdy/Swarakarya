import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Syarat & Ketentuan | Swarakarya",
  description: "Syarat dan Ketentuan penggunaan layanan Swarakarya - Aturan penggunaan situs web dan hak kekayaan intelektual kami.",
};

export default function TermsOfService() {
  return (
    <div className="flex-1 flex flex-col bg-[#FCFAF6] paper-texture relative min-h-screen text-navy overflow-x-hidden">
      {/* Navbar */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl mx-auto px-6 pt-36 pb-24 relative z-10">
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-gray-100 shadow-xl">
          <h1 className="font-accent text-3xl md:text-4xl font-extrabold text-navy mb-2">
            Syarat & Ketentuan
          </h1>
          <div className="w-24 h-1 bg-brand-gold mb-8 rounded-full" />

          <p className="text-sm text-gray-400 mb-8">Terakhir Diperbarui: 11 Agustus 2026</p>

          <div className="space-y-8 text-sm md:text-base leading-relaxed text-gray-700">
            <section className="space-y-3">
              <h2 className="font-accent text-xl font-bold text-navy">1. Penerimaan Ketentuan</h2>
              <p>
                Dengan mengakses dan menggunakan situs web Swarakarya, Anda dianggap telah membaca, memahami, dan menyetujui untuk terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak menyetujui bagian mana pun dari ketentuan ini, Anda tidak diperbolehkan menggunakan situs web kami.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-accent text-xl font-bold text-navy">2. Perubahan Ketentuan</h2>
              <p>
                Kami berhak untuk mengubah, memodifikasi, atau mengganti Syarat dan Ketentuan ini kapan saja tanpa pemberitahuan sebelumnya. Perubahan akan berlaku segera setelah dipublikasikan di halaman ini. Penggunaan situs web secara berkelanjutan setelah adanya perubahan menandakan penerimaan Anda terhadap ketentuan baru tersebut.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-accent text-xl font-bold text-navy">3. Hak Kekayaan Intelektual</h2>
              <p>
                Semua konten, logo, desain, teks, grafik, gambar, ikon, dan kode pemrograman di situs web ini adalah milik eksklusif Swarakarya atau pemberi lisensinya, dan dilindungi oleh undang-undang hak cipta serta kekayaan intelektual lainnya yang berlaku di Indonesia.
              </p>
              <p>
                Anda tidak diperbolehkan mereproduksi, mendistribusikan, memodifikasi, atau menggunakan konten situs web ini untuk tujuan komersial tanpa izin tertulis dari pihak Swarakarya.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-accent text-xl font-bold text-navy">4. Pembatasan Penggunaan</h2>
              <p>Anda setuju untuk tidak menggunakan situs web ini untuk tujuan yang melanggar hukum atau dilarang oleh Syarat dan Ketentuan ini, termasuk namun tidak terbatas pada:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Mengunggah atau menyebarkan virus, malware, atau kode berbahaya lainnya.</li>
                <li>Melakukan aktivitas yang dapat mengganggu, merusak, atau membebani infrastruktur situs web kami secara berlebihan.</li>
                <li>Mencoba mendapatkan akses tidak sah ke sistem komputer kami atau jaringan terkait lainnya.</li>
                <li>Mengumpulkan data pribadi pengguna lain untuk tujuan komersial atau spamming.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-accent text-xl font-bold text-navy">5. Batasan Tanggung Jawab</h2>
              <p>
                Situs web ini disediakan &ldquo;sebagaimana adanya&rdquo; tanpa jaminan apa pun, baik tersurat maupun tersirat. Swarakarya tidak menjamin bahwa situs web akan selalu tersedia, bebas dari kesalahan, atau bebas dari virus.
              </p>
              <p>
                Swarakarya tidak bertanggung jawab atas kerugian langsung, tidak langsung, insidental, atau konsekuensial yang timbul dari penggunaan atau ketidakmampuan menggunakan situs web ini.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-accent text-xl font-bold text-navy">6. Hukum yang Berlaku</h2>
              <p>
                Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. Setiap perselisihan yang timbul dari atau terkait dengan ketentuan ini akan diselesaikan secara musyawarah, dan jika tidak tercapai mufakat, akan diajukan ke yurisdiksi pengadilan yang berwenang di Indonesia.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-accent text-xl font-bold text-navy">7. Informasi Kontak</h2>
              <p>
                Jika Anda memiliki pertanyaan mengenai Syarat dan Ketentuan ini, silakan hubungi kami di:
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
