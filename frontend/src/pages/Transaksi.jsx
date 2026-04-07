import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const API_URL = "http://localhost:5000/api/transaksi";
const API_PASIEN = "http://localhost:5000/api/pasien";
const API_OBAT = "http://localhost:5000/api/obat";

export default function Transaksi() {
    const [data, setData] = useState([]);
    const [pasien, setPasien] = useState([]);
    const [obat, setObat] = useState([]);
    const [form, setForm] = useState({ tanggal: "", nama_pasien: "", nama_obat: "",  diagnosa: "" });
    const [editId, setEditId] = useState(null);

    const fetchData = async () => {
        const res = await fetch(API_URL);
        const result = await res.json();
        setData(result);
    };

    const fetchPasien = async () => {
        const res = await fetch(API_PASIEN);
        const result = await res.json();
        setPasien(result);
    };

    const fetchObat = async () => {
        const res = await fetch(API_OBAT);
        const result = await res.json();
        setObat(result);
    };

    useEffect(() => {
        fetchData();
        fetchPasien();
        fetchObat();
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

        setForm({ tanggal: "", nama_pasien: "", nama_obat: "",  diagnosa: "" });
        setEditId(null);
        fetchData();
    };

    const handleEdit = (item) => {
        setForm({
            tanggal: item.tanggal,
            nama_pasien: item.nama_pasien,
            nama_obat: item.nama_obat,
            diagnosa: item.diagnosa,
        });
        setEditId(item.id_transaksi);
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
                <h1 className="text-3xl font-bold mb-2">Data Transaksi</h1>
                <p className="text-gray-600 mb-6">
                Data transaksi digunakan sebagai dasar analisis Apriori.
                </p>

                <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-2xl shadow mb-6 grid md:grid-cols-3 gap-4"
                >
                <select
                    name="id_pasien"
                    value={form.id_pasien}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                >
                    <option value="">Pilih Pasien</option>
                    {pasien.map((p) => (
                    <option key={p.id_pasien} value={p.id_pasien}>
                        {p.nama_pasien}
                    </option>
                    ))}
                </select>

                <select
                    name="id_obat"
                    value={form.id_obat}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                >
                    <option value="">Pilih Obat</option>
                    {obat.map((o) => (
                    <option key={o.id_obat} value={o.id_obat}>
                        {o.nama_obat}
                    </option>
                    ))}
                </select>

                <button className="bg-blue-600 text-white rounded px-4">
                    {editId ? "Update" : "Tambah"}
                </button>
                </form>

                <div className="bg-white shadow rounded-2xl overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="p-3">No</th>
                                <th className="p-3">Tanggal</th>
                                <th className="p-3">Nama Pasien</th>
                                <th className="p-3">Nama Obat</th>
                                <th className="p-3">Diagnosa</th>
                                <th className="p-3">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={item.id_transaksi} className="border-b hover:bg-gray-50">
                                    <td className="p-3">{index + 1}</td>
                                    <td className="p-3">{item.tanggal}</td>
                                    <td className="p-3">{item.nama_pasien}</td>
                                    <td className="p-3">{item.nama_obat}</td>
                                    <td className="p-3">{item.diagnosa}</td>
                                    <td className="p-3 space-x-2">
                                        <button
                                            onClick={() => handleEdit(item)}
                                            className="bg-yellow-400 px-3 py-1 rounded-lg hover:bg-yellow-500"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item.id_transaksi)}
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