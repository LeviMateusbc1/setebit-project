import axios from "axios";

const api = axios.create({
  baseURL: "http://api.football-data.org",
  headers: {
    "Content-Type": "application/json",
  },
});

// api.interceptors.request.use(async (config) => {
//   const token = "a869a450b75e45f6950112e23de01209";

//   if (token) {
//     api.defaults.headers.authorization = `Bearer ${token}`;
//   }

//   return config;
// });

export default api;
