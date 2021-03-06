import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const baseURL = "http://10.0.2.2:1664";

const baseURLIRL = "http://192.168.1.22:1664";

const base = axios.create({ baseURL });

const MONGOApi = {
  login(body) {
    return base
      .post("/login", body)
      .then((res) => res.data)
      .catch((e) => console.log(e));
  },

  register(body) {
    return base
      .post("/register", body)
      .then((res) => res.data)
      .catch((e) => console.log(e));
  },

  addBook(body) {
    const getTokenAndAddBook = async () => {
      try {
        const token = await AsyncStorage.getItem("jwt");
        return base
          .post("/add-book", body, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res) => res.data);
      } catch (e) {
        console.log("Error addBook asyncStorage");
      }
    };
    getTokenAndAddBook();
  },

  getBookList() {
    const getTokenAndGetBook = async () => {
      try {
        const token = await AsyncStorage.getItem("jwt");
        return base
          .get("/bibliotheque", {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res) => res.data);
      } catch (e) {
        console.log("Error getBook asyncStorage");
      }
    };
    return getTokenAndGetBook();
  },

  deleteBookById(id) {
    const deleteBookById = async () => {
      try {
        const token = await AsyncStorage.getItem("jwt");
        return base
          .delete(`/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res) => res.data);
      } catch (e) {
        console.log("Error deletebook MONGOApi.js");
      }
    };
    deleteBookById();
  },

  getUserFromDB() {
    const getUser = async () => {
      try {
        const token = await AsyncStorage.getItem("jwt");
        return base
          .get("/profile", {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res) => res.data);
      } catch (e) {
        console.log("Error getUser asyncStorage");
      }
    };
    return getUser();
  },
};

export default MONGOApi;
