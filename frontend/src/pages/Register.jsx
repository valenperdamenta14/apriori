import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    nama: "",
    username: "",
    password: "",
    status: "Super Admin",
  });

  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/register",
        formData
      );

      alert(response.data.message);
      window.location.href = "/login";

    } catch (error) {
      if (error.response) {
        setMessage("Register gagal");
      } else {
        setMessage("Server tidak terhubung");
      }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        <h2 style={styles.title}>REGISTER AKUN</h2>
          <form onSubmit={handleRegister}>
            <div style={styles.inputGroup}>
              <label>Nama</label>
                <input
                  type="text"
                  name="nama"
                  placeholder="Masukkan nama"
                  value={formData.nama}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
            </div>

            <div style={styles.inputGroup}>
              <label>Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  style={styles.input}
                  required
                >
                  <option value="admin">Super Admin</option>
                  <option value="petugas">Petugas</option>
                </select>
            </div>

            <div style={styles.inputGroup}>
              <label>Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Masukkan username"
                  value={formData.username}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
            </div>

            <div style={styles.inputGroup}>
              <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Masukkan password"
                  value={formData.password}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
            </div>

            <div style={styles.loginContainer}>
              <span>Sudah punya akun? </span>
                <a href="/login" style={styles.loginLink}>
                  Login
                </a>
            </div>

            <button type="submit" style={styles.button}>
              Register
            </button>
          </form>

          {message && (
            <p style={styles.message}>
              {message}
            </p>
          )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
  },

  card: {
    width: "380px",
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },

  title: {
    textAlign: "center",
    marginBottom: "20px",
  },

  inputGroup: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "15px",
  },

  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginTop: "5px",
    fontSize: "14px",
  },

  loginContainer: {
    textAlign: "right",
    marginBottom: "15px",
    fontSize: "14px",
  },

  loginLink: {
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "bold",
  },

  button: {
    width: "100%",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  },

  message: {
    marginTop: "15px",
    textAlign: "center",
    color: "red",
  },
};

export default Register;