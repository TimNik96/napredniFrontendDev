import axios from "axios"

const API_URL = "https://restcountries.com/v3.1"

export const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 1000,
    headers: {},
})
