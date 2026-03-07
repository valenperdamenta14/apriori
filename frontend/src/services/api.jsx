const API_URL = "http://localhost:5000/api";

export const getPasien = async () => {
  const response = await fetch(`${API_URL}/pasien`);
  return response.json();
};

export const tambahPasien = async (data) => {
  const response = await fetch(`${API_URL}/pasien`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return response.json();
};