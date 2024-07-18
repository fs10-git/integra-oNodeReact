import axios from "axios"

const API_URL = "http://localhost:666"

export const getData = async () => {
    return await axios.get(`${API_URL}/produtos/getAll`)
}


export const createData = async (produto) => {
    return await axios.post(`${API_URL}/produtos/create`,produto)
}

export const deleteData = async (id) => {
    return await axios.delete(`${API_URL}/produtos/delete/${id}`)
}

export const updateData = async (id,produtos) => {
    return await axios.put(`${API_URL}/produtos/update/${id}`, produtos)
}