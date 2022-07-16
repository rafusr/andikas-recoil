import axios from 'axios'
const baseUrl = '/api/andikas'

const getSkills = () => {
    return axios.get(`${baseUrl}/skills`)
}

export default { getSkills }