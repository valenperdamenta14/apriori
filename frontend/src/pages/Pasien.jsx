import React, { useEffect, useState } from "react";
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
            response = await fetch(
                `${API_URL}/${editData.id_pasien}`,
                {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
                }
            );
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
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 ml-64 p-6 h-screen flex flex-col">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">
                            Data Pasien
                        </h1>
                        <p className="text-gray-600">
                            Kelola data pasien untuk analisis Apriori.
                        </p>
                    </div>

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

                <div className="flex-1">
                    <div className="max-h-[730px] overflow-y-auto bg-white shadow rounded-2xl">
                        <table className="w-full text-left border-collapse">
                            <thead className="sticky top-0 z-10 bg-gray-200">
                                <tr>
                                    <th className="p-3">No</th>
                                    <th className="p-3">Kode Pasien</th>
                                    <th className="p-3">Nama</th>
                                    <th className="p-3">Aksi</th>
                                </tr>
                            </thead>

                            <tbody>
                                {data.map((item, index) => (
                                    <tr
                                        key={item.id_pasien}
                                        className="border-b hover:bg-gray-50"
                                    >
                                        <td className="p-3">{index + 1}</td>
                                        <td className="p-3">{item.kode_pasien}</td>
                                        <td className="p-3">{item.nama_pasien}</td>
                                        <td className="p-3 space-x-2">
                                            <button
                                                onClick={() => handleEdit(item)}
                                                className="bg-yellow-400 px-3 py-1 rounded-lg hover:bg-yellow-500"
                                            >
                                                Edit
                                            </button>

                                            <button
                                                onClick={() =>
                                                    handleDelete(item.id_pasien)
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