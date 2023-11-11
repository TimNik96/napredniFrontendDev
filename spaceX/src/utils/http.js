// https://api.spacexdata.com/v3/ships
// https://api.spacexdata.com/v3/ships/{{ship_id}}
import axios from "axios"

const spaceXInstance = axios.create({
    baseURL: "https://api.spacexdata.com/v3",
    timeout: 1000,
    headers: {},
})

export const fetchAllShips = () => {
    return spaceXInstance.get("/ships")
}

export const fetchSingleShip = (shipID) => {
    return spaceXInstance.get(`/ships/${shipID}`)
}
