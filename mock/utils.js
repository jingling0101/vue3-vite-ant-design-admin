import axios from 'axios'

const instance = axios({
    baseURL: '/api/'
})

export default instance