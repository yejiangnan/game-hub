import axios from "axios";


export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "419419798b404d3b893674fda1121368"
  }
});