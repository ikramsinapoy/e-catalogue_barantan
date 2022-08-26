import axios from "axios";

export const Axios = axios.create({
    baseURL: "http://localhost/ecatalogue/api",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*"
    }
})