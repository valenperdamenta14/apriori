const db = require('../config/db');

exports.getAll = (req, res) => {
  db.query('SELECT * FROM data_pasien', (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

exports.getById = (req, res) => {
  const id = req.params.id;

  db.query('SELECT * FROM data_pasien WHERE id_pasien = ?', [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result[0]);
  });
};

exports.create = (req, res) => {
  const data = req.body;

  db.query('INSERT INTO data_pasien SET ?', data, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Data Pasien Berhasil Ditambahkan' });
  });
};

exports.update = (req, res) => {
  const id = req.params.id;
  const data = req.body;

  db.query('UPDATE data_pasien SET ? WHERE id_pasien=?', [data, id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Data Pasien Berhasil Diupdate' });
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  db.query('DELETE FROM data_pasien WHERE id_pasien=?', [id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Data Pasien Berhasil Dihapus' });
  });
};