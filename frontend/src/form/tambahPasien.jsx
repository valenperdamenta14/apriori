import { useEffect, useState } from "react";

export default function TambahPasien({
  onClose,
  onSave,
  editData,
}) {

  const [form, setForm] = useState({
    nama_pasien: "",
  });

  useEffect(() => {
    if (editData) {
      setForm({
        nama_pasien: editData.nama_pasien,
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

    if (!form.nama_pasien) {
      alert("Nama pasien wajib diisi!");
      return;
    }

    onSave(form);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-[500px] shadow-lg">

        <h3 className="text-xl font-semibold mb-4">
          {editData ? "Edit Pasien" : "Tambah Pasien"}
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-3">
            <input
              type="text"
              name="nama_pasien"
              placeholder="Nama Pasien"
              value={form.nama_pasien}
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