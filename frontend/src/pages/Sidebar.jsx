import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Data Pasien", path: "/pasien" },
    { name: "Data Obat", path: "/obat" },
    { name: "Data Transaksi", path: "/transaksi" },
    { name: "Kelola Data", path: "/kelola_data" },
    { name: "Manajemen User", path: "/user" },
  ];

  return (
    <div className="w-64 min-h-screen bg-gray-900 text-white p-5">
      <h1 className="text-2xl font-bold mb-8 text-center">
        Apriori System
      </h1>

      <ul className="space-y-3">
        {menu.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className={`block px-4 py-2 rounded-xl transition ${
                location.pathname === item.path
                  ? "bg-blue-600"
                  : "hover:bg-gray-700"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}