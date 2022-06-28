import axios from "axios";
export default axios.create({
  baseURL: "https://criptofriends.azurewebsites.net/api",
  headers: {
    "Content-type": "application/json"
  }
});