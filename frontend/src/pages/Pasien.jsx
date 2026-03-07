import { useEffect, useState } from "react";

export default function Pasien() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pasien")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Data Pasien</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Nomor</th>
            <th>Tanggal</th>
            <th>Nama Pasien</th>
            <th>Theraphy / Obat</th>
            <th>Diagnosa</th>
          </tr>
        </thead>

        <tbody>
          {data.length > 0 ? (
            data.map((item) => (
              <tr key={item.no}>
                <td>{item.no}</td>
                <td>{item.tanggal}</td>
                <td>{item.nama_pasien}</td>
                <td>{item.therapi_obat}</td>
                <td>{item.diagnosa}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Tidak ada data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}