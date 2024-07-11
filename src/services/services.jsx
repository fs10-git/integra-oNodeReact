import axios from "axios"

const API_URL = "http://localhost:666"

export const getData = async () => {
    return await axios.get(`${API_URL}/produtos/getAll`)
}