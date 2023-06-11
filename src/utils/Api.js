import axios from "axios";

const instance = axios.create();

// this can be used as a middleware to pass tokens
// or any other modifications to request and response

instance.interceptors.request.use(
  (req) => req,
  (error) => Promise.reject(error)
);

export { instance as default };
