import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://sugarcane-m1b0gfcst-zalfyputras-projects.vercel.app/kebun-tebu",
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Tangani error di sini
    if (error.response) {
      // Server mengembalikan status di luar 2xx
      console.error("Error Response:", error.response);
      return Promise.reject({
        message: error.response.data?.message || "Terjadi kesalahan pada server",
        status: error.response.status,
      });
    } else if (error.request) {
      // Tidak ada response dari server
      console.error("Error Request:", error.request);
      return Promise.reject({
        message: "Tidak dapat terhubung ke server",
      });
    } else {
      // Kesalahan lain
      console.error("Error Message:", error.message);
      return Promise.reject({
        message: "Terjadi kesalahan tidak diketahui",
      });
    }
  }
);

export default apiClient;
