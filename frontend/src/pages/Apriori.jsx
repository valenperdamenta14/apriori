import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const API_URL = "http://localhost:5000/api/apriori";

export default function Apriori() {

    const [data, setData] = useState({
        total_transaksi: 0,
        itemset1: [],
        itemset2: [],
        itemset3: [],
    });
    const [loading, setLoading] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [sudahDiproses, setSudahDiproses] = useState(false);
    const fetchApriori = async () => {
        setProcessing(true);

        try {
            const res = await fetch(API_URL);
            const result = await res.json();

            setData(result);
            setSudahDiproses(true);
        } catch (error) {
            console.error(error);
            alert("Gagal memproses Apriori");
        } finally {
            setProcessing(false);
        }
    };

    if (loading) {
        return (
            <div className="flex">
                <Sidebar />
                <div className="flex-1 ml-64 p-6">
                    <h1 className="text-2xl font-bold">
                        Loading...
                    </h1>
                </div>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 ml-64 p-6 overflow-y-auto">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold mb-2">
                        Analisis Apriori
                    </h1>

                    <p className="text-gray-600">
                        Analisis pola kombinasi obat menggunakan metode Apriori.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white p-5 rounded-2xl shadow">
                        <h2 className="text-gray-500 text-sm">
                            Total Transaksi
                        </h2>
                        <p className="text-3xl font-bold mt-2">
                            {data.total_transaksi}
                        </p>
                    </div>

                    <div className="bg-white p-5 rounded-2xl shadow">
                        <h2 className="text-gray-500 text-sm">
                            Minimum Support Itemset 1
                        </h2>

                        <p className="text-3xl font-bold mt-2">
                            10%
                        </p>
                    </div>

                    <div className="bg-white p-5 rounded-2xl shadow">
                        <h2 className="text-gray-500 text-sm">
                            Minimum Support Itemset 2
                        </h2>

                        <p className="text-3xl font-bold mt-2">
                            10%
                        </p>
                    </div>

                    <div className="bg-white p-5 rounded-2xl shadow">
                        <h2 className="text-gray-500 text-sm">
                            Minimum Support Itemset 3
                        </h2>

                        <p className="text-3xl font-bold mt-2">
                            5%
                        </p>
                    </div>
                </div>

                <div className="mt-4">
                    <button
                        onClick={fetchApriori}
                        disabled={processing}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                    >
                        {processing
                            ? "Memproses..."
                            : "Proses Apriori"}
                    </button>
                </div>

                {!sudahDiproses ? (
                    <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 p-4 rounded-lg mt-6">
                        Klik tombol <b>Proses Apriori</b> untuk menjalankan perhitungan.
                    </div>
                ) : (
                    <>
                        <div className="bg-white shadow rounded-2xl p-5 mb-6">
                            <h2 className="text-2xl font-bold mb-4">
                                Itemset 1
                            </h2>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-gray-200">
                                        <tr>
                                            <th className="p-3">No</th>
                                            <th className="p-3">Item</th>
                                            <th className="p-3">Frekuensi</th>
                                            <th className="p-3">Support (%)</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {data.itemset1.map((item, index) => (
                                            <tr
                                                key={index}
                                                className="border-b hover:bg-gray-50"
                                            >
                                                <td className="p-3">{index + 1}</td>
                                                <td className="p-3">{item.item}</td>
                                                <td className="p-3">{item.frekuensi}</td>
                                                <td className="p-3">{item.support}%</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="bg-white shadow rounded-2xl p-5 mb-6">
                            <h2 className="text-2xl font-bold mb-4">
                                Itemset 2
                            </h2>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-gray-200">
                                        <tr>
                                            <th className="p-3">No</th>
                                            <th className="p-3">Kombinasi Item</th>
                                            <th className="p-3">Frekuensi</th>
                                            <th className="p-3">Support (%)</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {data.itemset2.map((item, index) => (
                                            <tr
                                                key={index}
                                                className="border-b hover:bg-gray-50"
                                            >
                                                <td className="p-3">
                                                    {index + 1}
                                                </td>

                                                <td className="p-3">
                                                    {item.item}
                                                </td>

                                                <td className="p-3">
                                                    {item.frekuensi}
                                                </td>

                                                <td className="p-3">
                                                    {item.support}%
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>

                                </table>
                            </div>

                        </div>

                        {/* ITEMSET 3 */}
                        <div className="bg-white shadow rounded-2xl p-5 mb-6">

                            <h2 className="text-2xl font-bold mb-4">
                                Itemset 3
                            </h2>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">

                                    <thead className="bg-gray-200">
                                        <tr>
                                            <th className="p-3">No</th>
                                            <th className="p-3">Kombinasi Item</th>
                                            <th className="p-3">Frekuensi</th>
                                            <th className="p-3">Support (%)</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {data.itemset3.map((item, index) => (
                                            <tr
                                                key={index}
                                                className="border-b hover:bg-gray-50"
                                            >
                                                <td className="p-3">
                                                    {index + 1}
                                                </td>

                                                <td className="p-3">
                                                    {item.item}
                                                </td>

                                                <td className="p-3">
                                                    {item.frekuensi}
                                                </td>

                                                <td className="p-3">
                                                    {item.support}%
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>

                                </table>
                            </div>

                        </div>
                    </>
                )}

                

                

            </div>
        </div>
    );
}