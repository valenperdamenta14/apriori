import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";

const API_URL = "http://localhost:5000/api/user";

export default function User() {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] =
    useState(false);

  const [form, setForm] = useState({
    nama: "",
    status: "",
    username: "",
    password: "",
  });

  const [editId, setEditId] =
    useState(null);

  const fetchData = async () => {
    try {
      const res = await fetch(API_URL);
      const result = await res.json();
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        await fetch(
          `${API_URL}/${editId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify(form),
          }
        );
      } else {
        await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(form),
        });
      }

      setForm({
        nama: "",
        status: "",
        username: "",
        password: "",
      });

      setEditId(null);
      setShowModal(false);

      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleTambah = () => {
    setForm({
      nama: "",
      status: "",
      username: "",
      password: "",
    });

    setEditId(null);
    setShowModal(true);
  };

  const handleEdit = (item) => {
    setForm({
      nama: item.nama,
      status: item.status,
      username: item.username,
      password: "",
    });

    setEditId(item.id_user);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (
      window.confirm(
        "Yakin ingin menghapus user?"
      )
    ) {
      try {
        await fetch(`${API_URL}/${id}`, {
          method: "DELETE",
        });

        fetchData();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1 ml-64 p-8 h-screen flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8"
        >
          <div>
            <h1 className="text-4xl font-bold text-slate-800">
              Manajemen User
            </h1>

            <p className="text-slate-500 mt-2">
              Kelola akun pengguna yang dapat mengakses sistem.
            </p>
          </div>

          <button
            onClick={handleTambah}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            + Tambah User
          </button>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex-1 bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden"
        >
          <div className="h-full overflow-y-auto overflow-x-auto">
            <table className="w-full">
              <thead className="sticky top-0 z-10 bg-slate-100">
                <tr className="bg-slate-50 border-b">
                  <th className="px-4 py-4 text-left text-sm">
                    No
                  </th>

                  <th className="px-4 py-4 text-left text-sm">
                    Nama
                  </th>

                  <th className="px-4 py-4 text-left text-sm">
                    Status
                  </th>

                  <th className="px-4 py-4 text-left text-sm">
                    Username
                  </th>

                  <th className="px-4 py-4 text-left text-sm">
                    Aksi
                  </th>
                </tr>
              </thead>

              <tbody>
                {data.map(
                  (item, index) => (
                    <tr
                      key={item.id_user}
                      className="border-t hover:bg-slate-50 transition"
                    >
                      <td className="px-4 py-4">
                        {index + 1}
                      </td>

                      <td className="px-4 py-4 font-medium">
                        {item.nama}
                      </td>

                      <td className="px-4 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            item.status === "admin"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-green-100 text-green-700"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>

                      <td className="px-4 py-4">
                        {item.username}
                      </td>

                      <td className="px-4 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() =>
                              handleEdit(
                                item
                              )
                            }
                            className="bg-amber-400 hover:bg-amber-500 text-white px-4 py-2 rounded-lg transition"
                          >
                            Edit
                          </button>

                          <button
                            onClick={() =>
                              handleDelete(
                                item.id_user
                              )
                            }
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                          >
                            Hapus
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                )}

                {data.length === 0 && (
                  <tr>
                    <td
                      colSpan="5"
                      className="text-center py-8 text-slate-400"
                    >
                      Data user belum ada
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-lg rounded-3xl p-8 shadow-2xl border border-slate-200">
              <h2 className="text-xl font-semibold mb-5">
                {editId !== null
                  ? "Edit User"
                  : "Tambah User"}
              </h2>

              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input
                  type="text"
                  name="nama"
                  placeholder="Nama"
                  value={form.nama}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  required
                />

                <select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  required
                >
                  <option value="">
                    Pilih Status
                  </option>

                  <option value="admin">
                    Admin
                  </option>

                  <option value="user">
                    User
                  </option>
                </select>

                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={form.username}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  required
                />

                <input
                  type="password"
                  name="password"
                  placeholder={
                    editId
                      ? "Kosongkan jika tidak diubah"
                      : "Password"
                  }
                  value={form.password}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  required={!editId}
                />

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() =>
                      setShowModal(false)
                    }
                    className="px-4 py-2 border rounded-xl"
                  >
                    Batal
                  </button>

                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl"
                    >
                    {editId !== null
                      ? "Update"
                      : "Simpan"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}