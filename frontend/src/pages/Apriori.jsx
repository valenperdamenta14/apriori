import React, { useState } from "react";
import Sidebar from "./Sidebar";

const API_URL = "http://localhost:5000/api/apriori";

export default function Apriori() {

    const [data, setData] = useState({
        total_transaksi: 0,
        itemset1: [],
        itemset2: [],
        itemset3: [],
        associationRules: [],
    });
    const [processing, setProcessing] = useState(false);
    const [sudahDiproses, setSudahDiproses] = useState(false);
    const [minSupport, setMinSupport] = useState(10);
    const [minConfidence, setMinConfidence] = useState(60);
    const fetchApriori = async () => {
        setProcessing(true);

        try {
            const res = await fetch(
                `${API_URL}?minSupport=${minSupport}&minConfidence=${minConfidence}`
            );

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

                <div className="bg-white shadow rounded-2xl p-5 mt-4 mb-6">
                    <h2 className="text-xl font-bold mb-4">
                        Parameter Apriori
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Minimum Support (%)
                            </label>

                            <input
                                type="number"
                                min="1"
                                max="100"
                                value={minSupport}
                                onChange={(e) =>
                                    setMinSupport(Number(e.target.value))
                                }
                                className="w-full border rounded-lg p-2"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Minimum Confidence (%)
                            </label>

                            <input
                                type="number"
                                min="1"
                                max="100"
                                value={minConfidence}
                                onChange={(e) =>
                                    setMinConfidence(Number(e.target.value))
                                }
                                className="w-full border rounded-lg p-2"
                            />
                        </div>
                    </div>

                    <button
                        onClick={fetchApriori}
                        disabled={processing}
                        className={`mt-5 px-4 py-2 rounded-lg text-white transition ${
                            processing
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-blue-600 hover:bg-blue-700"
                        }`}
                    >
                        {processing
                            ? "Memproses..."
                            : "Proses Apriori"}
                    </button>
                </div>

                {sudahDiproses && (
                    <div className="grid md:grid-cols-3 gap-4 mb-6 mt-6">
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
                                Minimum Support
                            </h2>

                            <p className="text-3xl font-bold mt-2">
                                {minSupport}%
                            </p>
                        </div>

                        <div className="bg-white p-5 rounded-2xl shadow">
                            <h2 className="text-gray-500 text-sm">
                                Minimum Confidence
                            </h2>

                            <p className="text-3xl font-bold mt-2">
                                {minConfidence}%
                            </p>
                        </div>
                    </div>
                )}

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
                                <table className="w-full text-left border border-gray-300">
                                    <thead className="bg-gray-200">
                                        <tr>
                                            <th className="p-3">No</th>
                                            <th className="p-3">Item</th>
                                            <th className="p-3">Frekuensi</th>
                                            <th className="p-3">Support (%)</th>
                                            <th className="p-3">Confidence (%)</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {data.itemset1.length > 0 ? (
                                            data.itemset1.map((item, index) => (
                                                <tr
                                                    key={index}
                                                    className="border-b border-gray-300 hover:bg-gray-50"
                                                >
                                                    <td className="p-3">{index + 1}</td>
                                                    <td className="p-3">{item.item}</td>
                                                    <td className="p-3">{item.frekuensi}</td>
                                                    <td className="p-3">{item.support}%</td>
                                                    <td className="p-3">{item.confidence}%</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td
                                                    colSpan="5"
                                                    className="text-center p-4 text-gray-500"
                                                >
                                                    Tidak ada Itemset 1 yang memenuhi minimum support.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="bg-white shadow rounded-2xl p-5 mb-6">
                            <h2 className="text-2xl font-bold mb-4">
                                Itemset 2
                            </h2>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left border border-gray-300">
                                    <thead className="bg-gray-200">
                                        <tr>
                                            <th className="p-3">No</th>
                                            <th className="p-3">Kombinasi Item</th>
                                            <th className="p-3">Frekuensi</th>
                                            <th className="p-3">Support (%)</th>
                                            <th className="p-3">Confidence (%)</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {data.itemset2.length > 0 ? (
                                            data.itemset2.map((item, index) => (
                                                <tr
                                                    key={index}
                                                    className="border-b border-gray-300 hover:bg-gray-50"
                                                >
                                                    <td className="p-3">{index + 1}</td>
                                                    <td className="p-3">{item.item}</td>
                                                    <td className="p-3">{item.frekuensi}</td>
                                                    <td className="p-3">{item.support}%</td>
                                                    <td className="p-3">{item.confidence}%</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td
                                                    colSpan="5"
                                                    className="text-center p-4 text-gray-500"
                                                >
                                                    Tidak ada Itemset 2 yang memenuhi minimum support.
                                                </td>
                                            </tr>
                                        )}
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
                                <table className="w-full text-left border border-gray-300">

                                    <thead className="bg-gray-200">
                                        <tr>
                                            <th className="p-3">No</th>
                                            <th className="p-3">Kombinasi Item</th>
                                            <th className="p-3">Frekuensi</th>
                                            <th className="p-3">Support (%)</th>
                                            <th className="p-3">Confidence (%)</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {data.itemset3.length > 0 ? (
                                            data.itemset3.map((item, index) => (
                                                <tr
                                                    key={index}
                                                    className="border-b border-gray-300 hover:bg-gray-50"
                                                >
                                                    <td className="p-3">{index + 1}</td>
                                                    <td className="p-3">{item.item}</td>
                                                    <td className="p-3">{item.frekuensi}</td>
                                                    <td className="p-3">{item.support}%</td>
                                                    <td className="p-3">{item.confidence}%</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td
                                                    colSpan="5"
                                                    className="text-center p-4 text-gray-500"
                                                >
                                                    Tidak ada Itemset 3 yang memenuhi minimum support.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="bg-white shadow rounded-2xl p-5 mb-6">
                            <h2 className="text-2xl font-bold mb-4">
                                Association Rule
                            </h2>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left border border-gray-300">
                                    <thead className="bg-gray-200">
                                        <tr>
                                            <th className="p-3">No</th>
                                            <th className="p-3">Rule</th>
                                            <th className="p-3">Support (%)</th>
                                            <th className="p-3">Confidence (%)</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {data.associationRules &&
                                        data.associationRules.length > 0 ? (
                                            data.associationRules.map(
                                                (item, index) => (
                                                    <tr
                                                        key={index}
                                                        className="border-b border-gray-300 hover:bg-gray-50"
                                                    >
                                                        <td className="p-3">
                                                            {index + 1}
                                                        </td>

                                                        <td className="p-3">
                                                            {item.rule}
                                                        </td>

                                                        <td className="p-3">
                                                            {item.support}%
                                                        </td>

                                                        <td className="p-3">
                                                            {item.confidence}%
                                                        </td>
                                                    </tr>
                                                )
                                            )
                                        ) : (
                                            <tr>
                                                <td
                                                    colSpan="4"
                                                    className="p-4 text-center text-gray-500"
                                                >
                                                    Tidak ada aturan asosiasi yang memenuhi minimum confidence.
                                                </td>
                                            </tr>
                                        )}
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