import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import TambahPasien from "../form/tambahPasien";

const API_URL = "http://localhost:5000/api/pasien";

export default function Pasien() {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState(null);

  const fetchData = async () => {
    try {
      const res = await fetch(API_URL);
      const result = await res.json();
      setData(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSave = async (form) => {
    try {
      let response;

      if (editData) {
        response = await fetch(`${API_URL}/${editData.id_pasien}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });
      } else {
        response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });
      }

      if (!response.ok) {
        throw new Error("Gagal menyimpan data");
      }

      await fetchData();

      setShowModal(false);
      setEditData(null);
    } catch (error) {
      console.error(error);
      alert("Gagal menyimpan data");
    }
  };

  const handleEdit = (item) => {
    setEditData(item);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm(
        "Yakin ingin menghapus data?"
      );

      if (!confirmDelete) return;

      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      {/* Content */}
      <div className="flex-1 ml-64 p-8 h-screen flex flex-col">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8"
        >
          <div>
            <h1 className="text-4xl font-bold text-slate-800">
              Data Pasien
            </h1>

            <p className="text-slate-500 mt-2">
              Kelola data pasien sebagai sumber data analisis Apriori.
            </p>
          </div>

          <button
            onClick={() => {
              setEditData(null);
              setShowModal(true);
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            + Tambah Pasien
          </button>
        </motion.div>

        {/* Modal */}
        {showModal && (
          <TambahPasien
            onClose={() => {
              setShowModal(false);
              setEditData(null);
            }}
            onSave={handleSave}
            editData={editData}
          />
        )}

        {/* Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex-1 bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden"
        >
          <div className="h-full overflow-y-auto overflow-x-auto">

            <table className="w-full border-collapse">

              <thead className="sticky top-0 z-10 bg-slate-100">

                <tr className="text-slate-700">

                  <th className="px-6 py-4 text-left font-semibold">
                    No
                  </th>

                  <th className="px-6 py-4 text-left font-semibold">
                    Kode Pasien
                  </th>

                  <th className="px-6 py-4 text-left font-semibold">
                    Nama Pasien
                  </th>

                  <th className="px-6 py-4 text-center font-semibold">
                    Aksi
                  </th>

                </tr>

              </thead>

              <tbody>

                {data.length > 0 ? (
                  data.map((item, index) => (
                    <tr
                      key={item.id_pasien}
                      className="border-t hover:bg-slate-50 transition"
                    >
                      <td className="px-6 py-4">
                        {index + 1}
                      </td>

                      <td className="px-6 py-4 font-medium text-blue-600">
                        {item.kode_pasien}
                      </td>

                      <td className="px-6 py-4">
                        {item.nama_pasien}
                      </td>

                      <td className="px-6 py-4">

                        <div className="flex justify-center gap-3">

                          <button
                            onClick={() => handleEdit(item)}
                            className="bg-amber-400 hover:bg-amber-500 text-white px-4 py-2 rounded-lg transition"
                          >
                            Edit
                          </button>

                          <button
                            onClick={() =>
                              handleDelete(item.id_pasien)
                            }
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                          >
                            Hapus
                          </button>

                        </div>

                      </td>

                    </tr>
                  ))
                ) : (
                  <tr>

                    <td
                      colSpan="4"
                      className="text-center py-12 text-gray-400"
                    >
                      Belum ada data pasien.
                    </td>

                  </tr>
                )}

              </tbody>

            </table>

          </div>
        </motion.div>

      </div>
    </div>
  );
}