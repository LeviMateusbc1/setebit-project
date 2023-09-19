import axios from "axios";

const API_KEY = "a869a450b75e45f6950112e23de01209";
const API_BASE_URL = "https://api.football-data.org/";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "X-Auth-Token": API_KEY,
  },
});

export const fetchMatches = async () => {
  try {
    const response = await axiosInstance.get("/matches");
    return response.data;
  } catch (error) {
    throw error;
  }
};
