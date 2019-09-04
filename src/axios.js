import axios from "axios";

const instance = axios.create({
  baseURL: "http://jsonplaceholder.typicode.com"
});
instance.defaults.headers.common["Authorization"] = "AUTH TOKEN FROM INSTANCE";

instance.interceptors.request.use(
  req => {
    console.log(req, "Requesting is Done from Instance axios");
    return req;
  },
  error => {
    console.log(
      "Sorry, there is in interceptor error function while requesing in Instance"
    );
    return new Promise.reject(error);
  }
);
export default instance;
