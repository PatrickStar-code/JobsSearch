import axios from "axios";

export const api = axios.create({
    baseURL: "https://jobs-search-json-psi.vercel.app",
})

