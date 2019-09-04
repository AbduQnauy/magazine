import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";

axios.defaults.baseURL = "http://jsonplaceholder.typicode.com";

axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  // Req configuration function
  req => {
    console.log(req);
    console.log("Requesting is Done (:");
    return req;
  },
  //   Error handling function while requesting
  error => {
    console.log(error);
    console.log(
      "Sorry, there is in interceptor error function while requesing"
    );
    return new Promise.reject(error);
  }
);

axios.interceptors.response.use(
  // Res configuration function
  res => {
    console.log(res);
    console.log("Responding is Done (:");
    return res;
  },
  //   Error handling function while responding
  error => {
    console.log(error);
    console.log("Sorry, there is interceptor error function while responding");
    return new Promise.reject(error);
  }
);

const dest = document.getElementById("root");
ReactDOM.render(<App />, dest);
registerServiceWorker();
