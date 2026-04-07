const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const pasienRoutes = require('./src/routes/pasienRoutes');
const obatRoutes = require('./src/routes/obatRoutes');
const transaksiRoutes = require('./src/routes/transaksiRoutes');
const userRoutes = require('./src/routes/userRoutes');

app.use('/api/pasien', pasienRoutes);
app.use('/api/obat', obatRoutes);
app.use('/api/transaksi', transaksiRoutes);
app.use('/api/user', userRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});