const db = require('../config/db');

exports.getAll = (req, res) => {
  db.query(
    'SELECT * FROM data_obat ORDER BY id_obat ASC',
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    }
  );
};

exports.getById = (req, res) => {
  const id = req.params.id;

  db.query(
    'SELECT * FROM data_obat WHERE id_obat = ?',
    [id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result[0]);
    }
  );
};

exports.create = (req, res) => {
  const { nama_obat, jenis_obat } = req.body;

  if (!nama_obat || !jenis_obat) {
    return res.status(400).json({
      message: "Data belum lengkap",
    });
  }

  db.query(
    "SELECT MAX(kode_obat) AS lastKode FROM data_obat",
    (err, result) => {
      if (err) return res.status(500).json(err);

      const kode_obat = (result[0].lastKode || 0) + 1;

      db.query(
        "INSERT INTO data_obat (kode_obat, nama_obat, jenis_obat) VALUES (?, ?, ?)",
        [kode_obat, nama_obat, jenis_obat],
        (err, insertResult) => {
          if (err) return res.status(500).json(err);

          res.json({
            message: "Data Obat Berhasil Ditambahkan",
            id: insertResult.insertId,
            kode_obat,
          });
        }
      );
    }
  );
};

exports.update = (req, res) => {
  const id = req.params.id;
  const { nama_obat, jenis_obat } = req.body;

  db.query(
    'UPDATE data_obat SET nama_obat=?, jenis_obat=? WHERE id_obat=?',
    [nama_obat, jenis_obat, id],
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({
        message: 'Data Obat Berhasil Diupdate',
      });
    }
  );
};

exports.delete = (req, res) => {
  const id = req.params.id;

  db.query(
    'DELETE FROM data_obat WHERE id_obat=?',
    [id],
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({
        message: 'Data Obat Berhasil Dihapus',
      });
    }
  );
};