const db = require('../config/db');

exports.getAllPasien = (req, res) => {
  db.query('SELECT * FROM data_pasien', (err, results) => {
    if (err) {
      return res.status(500).json({
        message: 'Terjadi kesalahan',
        error: err
      });
    }
    res.json(results);
  });
};