const db = require('../config/db');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  const { nama, username, password, status } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = `
      INSERT INTO user (nama, username, password, status)
      VALUES (?, ?, ?, ?)
    `;

    db.query(sql, [nama, username, hashedPassword, status], (err, result) => {
      if (err) return res.status(500).json(err);

      res.json({ message: 'Register berhasil' });
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getAll = (req, res) => {
  db.query('SELECT * FROM user', (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

exports.getById = (req, res) => {
  const id = req.params.id;

  db.query('SELECT * FROM user WHERE id_user = ?', [id], (err, result) => {
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

  db.query('UPDATE user SET ? WHERE id_user=?', [data, id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'User Berhasil Diupdate' });
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  db.query('DELETE FROM user WHERE id_user=?', [id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'User Berhasil Dihapus' });
  });
};