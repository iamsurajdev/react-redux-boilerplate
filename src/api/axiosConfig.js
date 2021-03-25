import axios from "axios";

var axiosInstance = axios.create({
  // ! this is a demo url, need to put the original url here
  baseURL: "https://domain.com/api/",
  // other custom settings
});

export default axiosInstance;
