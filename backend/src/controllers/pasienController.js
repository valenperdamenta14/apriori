const db = require('../config/db');

exports.getAll = (req, res) => {
  db.query(
    'SELECT * FROM data_pasien ORDER BY id_pasien ASC',
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    }
  );
};

exports.getById = (req, res) => {
  const id = req.params.id;

  db.query(
    'SELECT * FROM data_pasien WHERE id_pasien = ?',
    [id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result[0]);
    }
  );
};

exports.create = (req, res) => {
  const { nama_pasien } = req.body;

  if (!nama_pasien) {
    return res.status(400).json({
      message: "Nama pasien wajib diisi",
    });
  }

  db.query(
    "SELECT kode_pasien FROM data_pasien ORDER BY id_pasien DESC LIMIT 1",
    (err, result) => {
      if (err) return res.status(500).json(err);

      let nomorBaru = 1;

      if (result.length > 0) {
        const nomorTerakhir = parseInt(
          result[0].kode_pasien.replace("P", "")
        );

        nomorBaru = nomorTerakhir + 1;
      }

      const kode_pasien = `P${String(nomorBaru).padStart(2, "0")}`;

      db.query(
        "INSERT INTO data_pasien (kode_pasien, nama_pasien) VALUES (?, ?)",
        [kode_pasien, nama_pasien],
        (err, insertResult) => {
          if (err) return res.status(500).json(err);

          res.json({
            message: "Data Pasien Berhasil Ditambahkan",
            id: insertResult.insertId,
            kode_pasien,
          });
        }
      );
    }
  );
};

exports.update = (req, res) => {
  const id = req.params.id;
  const { nama_pasien } = req.body;

  db.query(
    'UPDATE data_pasien SET nama_pasien=? WHERE id_pasien=?',
    [nama_pasien, id],
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({
        message: 'Data Pasien Berhasil Diupdate',
      });
    }
  );
};

exports.delete = (req, res) => {
  const id = req.params.id;

  db.query(
    'DELETE FROM data_pasien WHERE id_pasien=?',
    [id],
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({
        message: 'Data Pasien Berhasil Dihapus',
      });
    }
  );
};