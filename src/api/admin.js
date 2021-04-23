import request from "@/utils/request"

export const login = data => request({
    url: "/v-admin/user/login",
    method: "post",
    data
})

export const getInfo = () => request({
    url: "/v-admin/user/info",
    method: "post",
})
