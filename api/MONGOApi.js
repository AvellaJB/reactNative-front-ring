import axios from "axios";

const baseURL = "http://10.0.2.2:1664";

const base = axios.create({ baseURL });

const MONGOApi = {
  login(body) {
    return base
      .post("/login", body)
      .then((res) => res.data)
      .catch((e) => console.log(e));
  },
};

export default MONGOApi;
