import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:"https://zivo-033i.onrender.com",
  withCredentials:true,
});
