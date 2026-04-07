import React from "react";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-800">
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
        <h1 className="text-xl font-bold text-blue-600">Klinik Ibnu Sina</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
          Login
        </button>
      </nav>

      <section className="text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Analisis Pola Penggunaan Obat
        </motion.h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-600">
          Penerapan Metode Apriori untuk menganalisa pola penggunaan obat
          berdasarkan data diagnosa pasien di Klinik Ibnu Sina.
        </p>
      </section>

      <section className="py-20 px-6">
        <h2 className="text-3xl font-semibold mb-12 text-center">
          Fitur Utama
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {["Upload Data", "Proses Apriori", "Visualisasi Hasil"].map(
            (item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition text-center"
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-600">
                  {item}
                </h3>
                <p className="text-gray-600">
                  {item === "Upload Data" &&
                    "Mengunggah data diagnosa dan obat dari klinik."}
                  {item === "Proses Apriori" &&
                    "Mengolah data menggunakan algoritma Apriori untuk menemukan pola."}
                  {item === "Visualisasi Hasil" &&
                    "Menampilkan hasil analisis dalam bentuk grafik dan tabel."}
                </p>
              </div>
            )
          )}
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-6 text-center">
        <p>
          © {new Date().getFullYear()} Klinik Ibnu Sina | Sistem Analisis
          Apriori
        </p>
      </footer>
    </div>
  );
}
