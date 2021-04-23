const getters = {
    adminToken: state => state.auth.adminToken,
    adminInfo: state => state.auth.adminInfo,
    roles: state => state.auth.roles,

    routers: state => state.asyncRouter.routes
}

export default getters