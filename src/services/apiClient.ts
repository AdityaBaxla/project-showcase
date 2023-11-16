import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b197609c4c9646dd85b513dfa8442b51",
  },
});
