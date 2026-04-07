import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const API_URL = "http://localhost:5000/api/pasien";

export default function Pasien() {
    const [data, setData] = useState([]);
    const [form, setForm] = useState({ nama: ""});
    const [editId, setEditId] = useState(null);

    const fetchData = async () => {
        const res = await fetch(API_URL);
        const result = await res.json();
        setData(result);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (editId) {
            await fetch(`${API_URL}/${editId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
            });
        } else {
            await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
            });
        }

        setForm({ nama: ""});
        setEditId(null);
        fetchData();
    };

    const handleEdit = (item) => {
        setForm({
            nama: item.nama_pasien,
        });
        setEditId(item.id_pasien);
    };

    const handleDelete = async (id) => {
        if (confirm("Yakin ingin menghapus data?")) {
            await fetch(`${API_URL}/${id}`, {
                method: "DELETE",
            });
            fetchData();
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 p-6">
                <h1 className="text-3xl font-bold mb-2">Data Pasien</h1>
                <p className="text-gray-600 mb-6">
                    Kelola data pasien untuk analisis Apriori.
                </p>
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-6 rounded-2xl shadow mb-6 grid md:grid-cols-4 gap-4"
                >
                    <input
                        type="varchar"
                        name="nama_pasien"
                        placeholder="Nama"
                        value={form.nama_pasien}
                        onChange={handleChange}
                        className="border p-2 rounded"
                        required
                    />
                    <button className="bg-blue-600 text-white rounded px-4">
                        {editId ? "Update" : "Tambah"}
                    </button>
                </form>
                <div className="bg-white shadow rounded-2xl overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="p-3">No</th>
                                <th className="p-3">Nama</th>
                                <th className="p-3">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={item.id_pasien} className="border-b hover:bg-gray-50">
                                <td className="p-3">{index + 1}</td>
                                <td className="p-3">{item.nama_pasien}</td>
                                <td className="p-3 space-x-2">
                                    <button
                                    onClick={() => handleEdit(item)}
                                    className="bg-yellow-400 px-3 py-1 rounded-lg hover:bg-yellow-500"
                                    >
                                    Edit
                                    </button>
                                    <button
                                    onClick={() => handleDelete(item.id_pasien)}
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
    );
}