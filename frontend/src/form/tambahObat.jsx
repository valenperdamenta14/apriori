import { useEffect, useState } from "react";

export default function TambahObat({
  onClose,
  onSave,
  editData,
}) {
  const [form, setForm] = useState({
    nama_obat: "",
    jenis_obat: "",
  });

  useEffect(() => {
    if (editData) {
      setForm({
        nama_obat: editData.nama_obat || "",
        jenis_obat: editData.jenis_obat || "",
      });
    } else {
      setForm({
        nama_obat: "",
        jenis_obat: "",
      });
    }
  }, [editData]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nama_obat || !form.jenis_obat) {
      alert("Semua field wajib diisi!");
      return;
    }

    onSave(form);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-[500px] shadow-lg">
        <h3 className="text-xl font-semibold mb-4">
          {editData ? "Edit Obat" : "Tambah Obat"}
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-3">
            <input
              type="text"
              name="kode_obat"
            />
            <input
              type="text"
              name="nama_obat"
              placeholder="Nama Obat"
              value={form.nama_obat}
              onChange={handleChange}
              className="border p-2 rounded"
            />

            <input
              type="text"
              name="jenis_obat"
              placeholder="Jenis Obat"
              value={form.jenis_obat}
              onChange={handleChange}
              className="border p-2 rounded"
            />
          </div>

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
            >
              Batal
            </button>

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              {editData ? "Update" : "Tambah"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}