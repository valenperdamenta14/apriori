import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Sidebar from "./pages/Sidebar";
import Dashboard from "./pages/Dashboard";
import Pasien from "./pages/Pasien";
import Obat from "./pages/Obat";
import Transaksi from "./pages/Transaksi";
import User from "./pages/User";
import Apriori from "./pages/Apriori";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pasien" element={<Pasien />} />
        <Route path="/obat" element={<Obat />} />
        <Route path="/transaksi" element={<Transaksi />} />
        <Route path="/user" element={<User />} />
        <Route path="/apriori" element={<Apriori />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;