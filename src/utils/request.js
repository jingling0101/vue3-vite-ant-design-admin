import axios from "axios"
import {message} from "ant-design-vue"

const timeOut = 5000
const httpState = 20000
const tokenIllegal = 50011
const tokenLogged = 50012
const tokenExpired = 50014


const service = axios.create({
    baseURL: "/api/",
    timeout: timeOut
})

const token = localStorage.getItem("admin-token")

//
service.interceptors.request.use(
    config => {
        if (token) {
            // ['X-Token'] is a custom headers key
            config.headers["X-Token"] = token
        }
        return config
    },
    error => {
        // do something with request error
        console.log(error)
        return Promise.reject(error)
    }
)


//
service.interceptors.response.use(
    response => {
        const res = response.data
        if (res.code !== httpState) {
            message.error(res.message || "request api error")
            if (res.code === tokenIllegal || res.code === tokenLogged || res.code === tokenExpired) {
                // to re-login
                const msg = "must login again"
                message.error(res.message || msg)
            }
            return Promise.reject(new Error(res.message || "Error"))
        }
        return res

    },
    error => {
        console.log(`err${error}`)
        message.error(error.message || "Error")
        return Promise.reject(error)
    }
)


export default service