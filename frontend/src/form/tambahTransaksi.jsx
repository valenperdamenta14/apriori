import { useEffect, useState } from "react";

export default function TambahTransaksi({
  onClose,
  onSave,
  editData,
}) {
  const [form, setForm] = useState({
    tanggal: "",
    kode_pasien: "",
    nama_obat: [],
    diagnosa: "",
  });

  const [pasien, setPasien] = useState([]);
  const [obat, setObat] = useState([]);

  // Ambil data pasien & obat
  useEffect(() => {
    fetch("http://localhost:5000/api/pasien")
      .then((res) => res.json())
      .then((data) => setPasien(data))
      .catch(console.error);

    fetch("http://localhost:5000/api/obat")
      .then((res) => res.json())
      .then((data) => setObat(data))
      .catch(console.error);
  }, []);

  // Isi form saat edit
  useEffect(() => {
    if (editData) {
      setForm({
        tanggal: editData.tanggal
          ? editData.tanggal.split("T")[0]
          : "",
        kode_pasien: editData.kode_pasien,
        nama_obat: editData.nama_obat
          ? editData.nama_obat.split(",").map((item) => item.trim())
          : [],
        diagnosa: editData.diagnosa,
      });
    } else {
      setForm({
        tanggal: "",
        kode_pasien: "",
        nama_obat: [],
        diagnosa: "",
      });
    }
  }, [editData]);

  // Input biasa
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Checkbox obat
  const handleObatChange = (namaObat) => {
    setForm((prev) => {
      const sudahDipilih = prev.nama_obat.includes(namaObat);

      return {
        ...prev,
        nama_obat: sudahDipilih
          ? prev.nama_obat.filter((item) => item !== namaObat)
          : [...prev.nama_obat, namaObat],
      };
    });
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.tanggal ||
      !form.kode_pasien ||
      form.nama_obat.length === 0 ||
      !form.diagnosa
    ) {
      alert("Semua field wajib diisi!");
      return;
    }

    const data = {
      ...form,
      nama_obat: form.nama_obat.join(", "),
    };

    onSave(data);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <div className="bg-white p-6 rounded-xl w-[650px] shadow-xl">

        <h3 className="text-2xl font-bold mb-5">
          {editData ? "Edit Transaksi" : "Tambah Transaksi"}
        </h3>

        <form onSubmit={handleSubmit}>

          <div className="space-y-4">

            {/* Tanggal */}
            <div>
              <label className="block mb-1 font-medium">
                Tanggal
              </label>

              <input
                type="date"
                name="tanggal"
                value={form.tanggal}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
              />
            </div>

            {/* Pasien */}
            <div>
              <label className="block mb-1 font-medium">
                Kode Pasien
              </label>

              <select
                name="kode_pasien"
                value={form.kode_pasien}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
              >
                <option value="">
                  -- Pilih Pasien --
                </option>

                {pasien.map((item) => (
                  <option
                    key={item.id_pasien}
                    value={item.kode_pasien}
                  >
                    {item.kode_pasien} - {item.nama_pasien}
                  </option>
                ))}
              </select>
            </div>

            {/* Nama Obat */}
            <div>

              <label className="block mb-2 font-medium">
                Nama Obat
              </label>

              <div className="border rounded-lg p-3 max-h-52 overflow-y-auto">

                {obat.map((item) => (

                  <label
                    key={item.id_obat}
                    className="flex items-center gap-2 py-1 cursor-pointer hover:bg-gray-50 rounded px-1"
                  >

                    <input
                      type="checkbox"
                      checked={form.nama_obat.includes(item.nama_obat)}
                      onChange={() =>
                        handleObatChange(item.nama_obat)
                      }
                    />

                    <span>{item.nama_obat}</span>

                  </label>

                ))}

              </div>

              <div className="mt-2 text-sm text-gray-600">

                <span className="font-semibold">
                  Obat dipilih :
                </span>

                <br />

                {form.nama_obat.length === 0 ? (
                  <span className="text-red-500">
                    Belum ada obat dipilih
                  </span>
                ) : (
                  <span className="text-blue-600">
                    {form.nama_obat.join(", ")}
                  </span>
                )}

              </div>

            </div>

            {/* Diagnosa */}
            <div>
              <label className="block mb-1 font-medium">
                Diagnosa
              </label>

              <input
                type="text"
                name="diagnosa"
                placeholder="Masukkan diagnosa"
                value={form.diagnosa}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
              />
            </div>

          </div>

          <div className="flex justify-end gap-3 mt-6">

            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-lg"
            >
              Batal
            </button>

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
            >
              {editData ? "Update" : "Tambah"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}