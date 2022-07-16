import axios from 'axios'
const baseUrl = '/api/andikas'

const getAbout = () => {
    return axios.get(`${baseUrl}/about`)
}

const updateAbout = newAbout => {
    return axios.put(`${baseUrl}/about/62ce425aae55c050159257c4`, newAbout)
}

export default {
    getAbout,
    updateAbout
}