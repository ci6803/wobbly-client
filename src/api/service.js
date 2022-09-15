import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5005",
});

const errorHandler = (err) => {
  throw err;
};

const uploadImage = (file) => {
  return api
    .post("/api/upload", file)
    .then((res) => res.data)
    .catch(errorHandler);
};

export { uploadImage };
