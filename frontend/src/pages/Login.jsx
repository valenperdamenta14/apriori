import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/login",
        formData
      );

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      alert(response.data.message);
      window.location.href = "/sidebar";

    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Server tidak terhubung");
      }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>LOGIN SISTEM</h2>
        <form onSubmit={handleLogin}>
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

          <div style={styles.registerContainer}>
            <span>Belum punya akun? </span>
            <a href="/register" style={styles.registerLink}>
              Register
            </a>
          </div>

          <button type="submit" style={styles.button}>
            Login
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
    width: "350px",
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

  registerContainer: {
    textAlign: "right",
    marginBottom: "15px",
    fontSize: "14px",
  },

  registerLink: {
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

export default Login;