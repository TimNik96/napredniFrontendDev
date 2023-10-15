import { axiosInstance } from "./serviceConfig.js"

export const getAllCountries = () => {
    return axiosInstance.get("/all")
}

export const getSingleCountry = (name) => {
    return axiosInstance.get(`/name/${name}`)
}

// https://restcountries.com/v3.1/region/{region}
