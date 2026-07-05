import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function Register() {
  const [formData, setFormData] = useState({
    nama: "",
    username: "",
    password: "",
    status: "Super Admin",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setMessage("");
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/register",
        formData
      );

      alert(response.data.message);
      window.location.href = "/login";
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message || "Register gagal");
      } else {
        setMessage("Server tidak terhubung");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-100 flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg"
      >

        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-4xl mb-4">
              👤
            </div>

            <h1 className="text-2xl font-bold text-gray-800">
              Register
            </h1>

            <p className="text-gray-500 mt-2">
              Sistem Analisis Pola Penggunaan Obat
            </p>

            <p className="text-sm text-blue-600 font-medium">
              Klinik Ibnu Sina
            </p>
          </div>

          <form
            onSubmit={handleRegister}
            className="space-y-5"
          >
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Nama Lengkap
              </label>

              <input
                type="text"
                name="nama"
                placeholder="Masukkan nama lengkap"
                value={formData.nama}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Status
              </label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              >
                <option value="admin">
                  Super Admin
                </option>

                <option value="petugas">
                  Petugas
                </option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Username
              </label>

              <input
                type="text"
                name="username"
                placeholder="Masukkan username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Masukkan password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            {message && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-red-600 text-sm text-center">
                {message}
              </div>
            )}

            <div className="text-right">
              <span className="text-gray-500 text-sm">
                Sudah punya akun?{" "}
              </span>

              <a
                href="/login"
                className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
              >
                Login
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
            >
              Register
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}