const db = require('../config/db');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  const { nama, username, password, status } = req.body;

  if (!nama || !username || !password || !status) {
    return res.status(400).json({
      message: "Semua field wajib diisi",
    });
  }

  try {
    const checkSql = 'SELECT * FROM user WHERE username = ?';
    db.query(checkSql, [username], async (err, result) => {
      if (err) return res.status(500).json(err);

      if (result.length > 0) {
        return res.status(400).json({
          message: 'Username sudah digunakan',
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const sql = `
        INSERT INTO user (nama, username, password, status)
        VALUES (?, ?, ?, ?)
      `;

      db.query(
        sql,
        [nama, username, hashedPassword, status],
        (err, result) => {
          if (err) return res.status(500).json(err);

          res.status(201).json({
            message: 'Register berhasil',
          });
        }
      );
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.login = (req, res) => {
  const { username, password } = req.body;

  const sql = 'SELECT * FROM user WHERE username = ?';

  db.query(sql, [username], async (err, result) => {
    if (err) return res.status(500).json(err);

    if (result.length === 0) {
      return res.status(401).json({
        message: 'Username tidak ditemukan',
      });
    }

    const user = result[0];
    const validPassword = await bcrypt.compare(
      password,
      user.password
    );

    if (!validPassword) {
      return res.status(401).json({
        message: 'Password salah',
      });
    }

    res.status(200).json({
      message: 'Login berhasil',
      user: {
        id_user: user.id_user,
        nama: user.nama,
        username: user.username,
        status: user.status,
      },
    });
  });
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