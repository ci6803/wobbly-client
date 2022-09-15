import axios from "axios";
 
const api = axios.create({

  baseURL: 'http://localhost:5005/api'

});
 
const errorHandler = (err) => {
  throw err;
};

const uploadImage = (file) => {
    return api.post("/upload", file)
      .then(res => res.data)
      .catch(errorHandler);
  };

  export {uploadImage};
    
