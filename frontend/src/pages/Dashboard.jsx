import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  const [totalPasien, setTotalPasien] = useState(0);
  const [totalObat, setTotalObat] = useState(0);
  const [totalTransaksi, setTotalTransaksi] = useState(0);

  useEffect(() => {
    getDashboardData();
  }, []);

  const getDashboardData = async () => {
    try {
      const pasienRes = await axios.get(
        "http://localhost:5000/api/pasien"
      );
      setTotalPasien(pasienRes.data.length);

      const obatRes = await axios.get(
        "http://localhost:5000/api/obat"
      );
      setTotalObat(obatRes.data.length);

      const transaksiRes = await axios.get(
        "http://localhost:5000/api/transaksi"
      );
      setTotalTransaksi(transaksiRes.data.length);
    } catch (error) {
      console.log("Error mengambil data dashboard:", error);
    }
  };

  const cards = [
    {
      title: "Total Data Pasien",
      value: totalPasien,
      icon: "👨‍⚕️",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Total Data Obat",
      value: totalObat,
      icon: "💊",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Total Transaksi",
      value: totalTransaksi,
      icon: "📋",
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />
        <div className="flex-1 ml-64 overflow-y-auto">
          <div className="max-w-7xl mx-auto p-8">
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-10"
            >

              <h1 className="text-4xl font-bold text-slate-800">
                Dashboard
              </h1>

              <p className="text-slate-500 mt-2 text-lg">
                Selamat datang di Sistem Analisis Pola Penggunaan Obat
                Klinik Ibnu Sina.
              </p>

              <p className="text-sm text-slate-400 mt-1">
                {new Date().toLocaleDateString("id-ID", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {cards.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.15,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all p-7 border border-gray-100"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-slate-500 font-medium">
                        {item.title}
                      </p>

                      <h2 className="text-5xl font-bold mt-4 text-slate-800">
                        {item.value}
                      </h2>
                    </div>

                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-4xl shadow-lg`}
                    >
                      {item.icon}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
}