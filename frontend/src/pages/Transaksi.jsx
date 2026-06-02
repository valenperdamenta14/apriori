import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import TambahTransaksi from "../form/tambahTransaksi";

const API_URL = "http://localhost:5000/api/transaksi";

export default function Transaksi() {

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

    // Tambah / Update
    const handleSave = async (form) => {

        try {

            if (editData) {

                // UPDATE
                await fetch(`${API_URL}/${editData.id_transaksi}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(form),
                });

            } else {

                // INSERT
                await fetch(API_URL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(form),
                });
            }

            fetchData();
            setShowModal(false);
            setEditData(null);

        } catch (error) {
            console.error(error);
        }
    };

    // EDIT
    const handleEdit = (item) => {
        setEditData(item);
        setShowModal(true);
    };

    // DELETE
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
        <div className="flex min-h-screen bg-gray-100">

            <Sidebar />

            <div className="flex-1 ml-64 p-6 h-screen flex flex-col">

                {/* Header */}
                <div className="flex justify-between items-center mb-6">

                    <div>
                        <h1 className="text-3xl font-bold mb-2">
                            Data Transaksi
                        </h1>

                        <p className="text-gray-600">
                            Data transaksi digunakan sebagai dasar analisis Apriori.
                        </p>
                    </div>

                    {/* Button Tambah */}
                    <button
                        onClick={() => {
                            setEditData(null);
                            setShowModal(true);
                        }}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                    >
                        Tambah
                    </button>

                </div>

                {/* Modal */}
                {showModal && (
                    <TambahTransaksi
                        onClose={() => {
                            setShowModal(false);
                            setEditData(null);
                        }}
                        onSave={handleSave}
                        editData={editData}
                    />
                )}

                {/* Table */}
                <div className="flex-1">
                    <div className="max-h-[730px] overflow-y-auto bg-white shadow rounded-2xl">

                        <table className="w-full text-left border-collapse">

                            <thead className="sticky top-0 z-10 bg-gray-200">
                                <tr>
                                    <th className="p-3">No</th>
                                    <th className="p-3">Tanggal</th>
                                    <th className="p-3">Kode Pasien</th>
                                    <th className="p-3">Nama Obat</th>
                                    <th className="p-3">Diagnosa</th>
                                    <th className="p-3">Aksi</th>
                                </tr>
                            </thead>

                            <tbody>

                                {data.map((item, index) => (
                                    <tr
                                        key={item.id_transaksi}
                                        className="border-b hover:bg-gray-50"
                                    >

                                        <td className="p-3">
                                            {index + 1}
                                        </td>

                                        <td className="p-3">
                                            {item.tanggal}
                                        </td>

                                        <td className="p-3">
                                            {item.kode_pasien}
                                        </td>

                                        <td className="p-3">
                                            {item.nama_obat}
                                        </td>

                                        <td className="p-3">
                                            {item.diagnosa}
                                        </td>

                                        <td className="p-3 space-x-2">

                                            <button
                                                onClick={() => handleEdit(item)}
                                                className="bg-yellow-400 px-3 py-1 rounded-lg hover:bg-yellow-500"
                                            >
                                                Edit
                                            </button>

                                            <button
                                                onClick={() =>
                                                    handleDelete(item.id_transaksi)
                                                }
                                                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                                            >
                                                Hapus
                                            </button>

                                        </td>

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