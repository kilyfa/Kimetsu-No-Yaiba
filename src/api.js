import axios from "axios";

const api = axios.create({
  baseURL: "https://api.myanimelist.net/v2",
  headers: {
    Authorization: "Bearer YOUR_ACCESS_TOKEN",
  },
});

export default api;
