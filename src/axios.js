import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8001",
});

export default instance;
// https://tinderbackend4.herokuapp.com/
