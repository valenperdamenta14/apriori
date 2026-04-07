const db = require('../config/db');

exports.getAll = (req, res) => {
  db.query('SELECT * FROM user', (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

exports.getById = (req, res) => {
  const id = req.params.id;

  db.query('SELECT * FROM user WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result[0]);
  });
};

exports.create = (req, res) => {
  const data = req.body;

  db.query('INSERT INTO user SET ?', data, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'User Berhasil Ditambahkan' });
  });
};

exports.update = (req, res) => {
  const id = req.params.id;
  const data = req.body;

  db.query('UPDATE user SET ? WHERE id=?', [data, id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'User Berhasil Diupdate' });
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  db.query('DELETE FROM user WHERE id=?', [id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'User Berhasil Dihapus' });
  });
};