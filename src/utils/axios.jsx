import axios from "axios";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com",
//   withCredentials: true,
});

instance.interceptors.request.use(
  function (response) {
    console.log("response --->", response);

    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
