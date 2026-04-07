import React from "react";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      {/* Content */}
      <div className="flex-1 p-6 overflow-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600">
            Analisis Data Apriori Klinik Ibnu Sina
          </p>
        </div>

        {/* Statistik */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-gray-500">Total Data</h2>
            <p className="text-2xl font-bold">120</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-gray-500">Pola Ditemukan</h2>
            <p className="text-2xl font-bold">35</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-gray-500">Confidence Tertinggi</h2>
            <p className="text-2xl font-bold">85%</p>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">
            Hasil Analisis Apriori
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-3">No</th>
                  <th className="p-3">Aturan</th>
                  <th className="p-3">Support</th>
                  <th className="p-3">Confidence</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    rule: "Paracetamol → Vitamin C",
                    support: "30%",
                    confidence: "80%",
                  },
                  {
                    rule: "Amoxicillin → Ibuprofen",
                    support: "25%",
                    confidence: "75%",
                  },
                  {
                    rule: "OBH → Vitamin C",
                    support: "20%",
                    confidence: "70%",
                  },
                ].map((item, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3">{item.rule}</td>
                    <td className="p-3">{item.support}</td>
                    <td className="p-3">{item.confidence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
