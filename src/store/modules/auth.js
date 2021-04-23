import {login, getInfo} from "@/api/admin"
import {
    ADMIN_SET_TOKEN, ADMIN_SET_INFO, ADMIN_SET_ROLES, ADMIN_SET_MENU,
    ADMIN_LOGIN_RESULT, ADMIN_INFO_RESULT,
    ADMIN_LOGOUT
} from "@/store/mutation-types"
import router, {asyncRoutes} from "@/router"
import {httpCodeSuccess} from "@/utils/code-http"


export default {
    state: () => ({
        adminToken: localStorage.getItem("admin-token") || "",
        adminInfo: localStorage.getItem("admin-info") || "",
        roles: [],
    }),
    mutations: {
        [ADMIN_SET_TOKEN]: (state, token) => {
            state.token = token
        },
        [ADMIN_SET_INFO]: (state, adminInfo) => {
            state.adminInfo = adminInfo
        },
        [ADMIN_SET_ROLES]: (state, roles) => {
            state.roles = roles
        },
    },
    actions: {
        // 登陆保存token到store
        [ADMIN_LOGIN_RESULT]({commit}, form) {
            return new Promise((resolve, reject) => {
                login(form).then(response => {
                    const {code, token, data} = response

                    if (code === httpCodeSuccess) {

                        const tokenStr = token || ""
                        localStorage.setItem("admin-token", tokenStr)
                        commit(ADMIN_SET_TOKEN, token)

                        const infoStr = JSON.stringify(data)
                        localStorage.setItem("admin-info", infoStr)
                        commit(ADMIN_SET_INFO, infoStr)

                    }
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        // 获取用户信息
        [ADMIN_INFO_RESULT]({commit}) {
            return new Promise((resolve, reject) => {
                getInfo().then(response => {
                    const {code, data} = response
                    if (code === httpCodeSuccess) {
                        // console.log(data)
                        const infoStr = JSON.stringify(data)
                        commit(ADMIN_SET_INFO, infoStr)
                        commit(ADMIN_SET_ROLES, data.roles)
                    }
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        // 退出登陆
        [ADMIN_LOGOUT]({commit}) {
            localStorage.removeItem("admin-token")
            localStorage.removeItem("admin-info")

            commit(ADMIN_SET_TOKEN, "")
            commit(ADMIN_SET_INFO, "")

            asyncRoutes.forEach(item => {
                router.removeRoute(item.name)
            })

        }

    }
}