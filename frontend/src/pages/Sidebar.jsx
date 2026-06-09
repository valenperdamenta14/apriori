import React from "react";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const menu = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Data Pasien", path: "/pasien" },
    { name: "Data Obat", path: "/obat" },
    { name: "Data Transaksi", path: "/transaksi" },
    { name: "Kelola Data", path: "/apriori" },
    { name: "Manajemen User", path: "/user" },
  ];

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Apakah Anda yakin ingin logout?"
    );

    if (confirmLogout) {
      localStorage.removeItem("user");
      navigate("/");
    }
  };

  return (
    <div className="w-64 min-h-screen bg-gray-900 text-white p-5 fixed left-0 top-0 shadow-lg flex flex-col">
      <h1 className="text-2xl font-bold mb-8 text-center">
        Apriori System
      </h1>

      <ul className="space-y-3 flex-1">
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

      <button
        onClick={handleLogout}
        className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-xl transition mt-4"
      >
        Logout
      </button>
    </div>
  );
}