import axios from "axios";
 
const api = axios.create({

  baseURL: process.env.REACT_APP_API_URL || 'https://magenta-spider-cape.cyclic.app'

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
    
