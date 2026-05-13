import React, { useEffect, useState } from "react";
import axios from "axios";
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

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 ml-64 p-6 overflow-y-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-gray-600">
              Analisis Data Apriori Klinik Ibnu Sina
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-gray-500">Total Data Pasien</h2>
              <p className="text-3xl font-bold text-blue-600">
                {totalPasien}
              </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-gray-500">Total Data Obat</h2>
              <p className="text-3xl font-bold text-blue-600">
                {totalObat}
              </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-gray-500">Total Transaksi</h2>
              <p className="text-3xl font-bold text-blue-600">
                {totalTransaksi}
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}