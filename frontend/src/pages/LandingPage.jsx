import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  const fitur = [
    {
      title: "Upload Data",
      desc: "Mengunggah data diagnosa pasien beserta obat yang diberikan sebagai dasar proses analisis.",
    },
    {
      title: "Proses Apriori",
      desc: "Melakukan proses pencarian pola hubungan antar obat menggunakan algoritma Apriori.",
    },
    {
      title: "Visualisasi Hasil",
      desc: "Menampilkan hasil analisis dalam bentuk tabel aturan asosiasi yang mudah dipahami.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-100 text-gray-800">
      <nav className="bg-white/90 backdrop-blur border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-8 py-4">
          <div>
            <h1 className="text-2xl font-bold text-blue-700">
              Klinik Ibnu Sina
            </h1>

            <p className="text-sm text-gray-500">
              Sistem Analisis Apriori
            </p>
          </div>

          <button
            onClick={() => navigate("/login")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl transition-all duration-300 shadow hover:shadow-lg"
          >
            Login
          </button>
        </div>
      </nav>

      <section className="min-h-[82vh] flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: .8 }}
            >
              <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Sistem Pendukung Keputusan
              </span>

              <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight mb-6">
                Analisis Pola
                <br />
                <span className="text-blue-600">
                  Penggunaan Obat
                </span>
              </h1>

              <p className="text-lg text-gray-600 leading-8 max-w-xl">
                Sistem ini menerapkan algoritma <b>Apriori</b> untuk
                menemukan pola penggunaan obat berdasarkan data diagnosa
                pasien sehingga dapat membantu proses analisis di
                Klinik Ibnu Sina.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: .8 }}
            >
              <div className="bg-white rounded-3xl shadow-2xl p-10">
                <div className="grid grid-cols-2 gap-5">
                  <div className="bg-blue-50 rounded-2xl p-6">
                    <div className="text-5xl mb-3">
                      💊
                    </div>
                    <h3 className="font-bold text-lg">
                      Data Obat
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">
                      Mengelola seluruh data obat yang digunakan klinik.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded-2xl p-6">
                    <div className="text-5xl mb-3">
                      🩺
                    </div>
                    <h3 className="font-bold text-lg">
                      Data Pasien
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">
                      Mengelola seluruh data pasien yang digunakan klinik.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded-2xl p-6">
                    <div className="text-5xl mb-3">
                      📊
                    </div>
                    <h3 className="font-bold text-lg">
                      Apriori
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">
                      Menemukan association rules antar obat.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded-2xl p-6">
                    <div className="text-5xl mb-3">
                      📈
                    </div>
                    <h3 className="font-bold text-lg">
                      Hasil
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">
                      Visualisasi hasil analisis dalam bentuk tabel.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-4">
              Fitur Utama
            </h2>

            <p className="text-center text-gray-500 max-w-2xl mx-auto mb-16">
              Seluruh proses analisis mulai dari pengelolaan data hingga
              menghasilkan pola penggunaan obat dilakukan dalam satu sistem.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {fitur.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  transition: { duration: .2 }
                }}
                className="bg-white rounded-3xl border border-gray-100 shadow-lg p-8 hover:shadow-2xl transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl mb-6">
                  {index === 0 ? "📁" : index === 1 ? "⚙️" : "📑"}
                </div>
                <h3 className="text-xl font-bold mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-7">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">
              Klinik Ibnu Sina
            </h3>

            <p className="text-gray-400 mb-6">
              Sistem Analisis Pola Penggunaan Obat
              menggunakan Algoritma Apriori
            </p>

            <div className="border-t border-slate-700 pt-6 text-sm text-gray-500">
              © {new Date().getFullYear()} Klinik Ibnu Sina.
              All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}