import axios from "axios";
/* On mets dans une constante la base de l'URL de notre api. */
const baseURL = "https://openlibrary.org/isbn/";

/* On créée une connextion AXIOS. */

const base = axios.create({ baseURL });

/* On crée une fonction qui prend en paramètre l'ISBN de notre livre et l'ajoute
dans le liens du Call API. 
On a un .json à la fin du liens conformément à la doc de l'API. */
const ISBNApi = {
  getDetailsFromISBN(ISBN) {
    return base.get(`/${ISBN}.json`).then((res) => res.data);
  },
};

export default ISBNApi;
