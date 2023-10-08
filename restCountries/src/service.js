import { axiosInstance } from "./serviceConfig.js"

export const getAllCountries = () => {
    return axiosInstance.get("/all")
}

export const getSingleCountry = (name) => {
    return axiosInstance.get(`/name/${name}`)
}
