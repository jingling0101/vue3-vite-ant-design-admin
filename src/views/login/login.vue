<template>
    <div class="page-login">
        <div class="login-wrapper">
            <div class="login-title">
                Login
            </div>

            <div class="login-input-wrapper">
                <a-input class="login-input" v-model:value="username" placeholder="用户名">
                    <template #prefix>
                        <UserOutlined style="color: rgba(0, 0, 0, 0.25);"/>
                    </template>
                </a-input>

                <a-input class="login-input" v-model:value="password" type="password" placeholder="密码">
                    <template #prefix>
                        <LockOutlined style="color: rgba(0, 0, 0, 0.25);"/>
                    </template>
                </a-input>

                <a-button style="background: linear-gradient(to right, #8ac1f8, #1890ff);color:#fff;"
                          @click="loginSubmit" :disabled="username && password? false:true" block>登陆
                </a-button>

                <div class="wx-login">@nmfox.com</div>

            </div>

        </div>
    </div>

</template>


<script setup>
    import {ref} from "vue"
    import {useStore} from "vuex"
    import {useRouter, useRoute} from "vue-router"
    import {message} from "ant-design-vue"
    import {ADMIN_LOGIN_RESULT, ADMIN_INFO_RESULT, ROUTERS_GENERATE} from "@/store/mutation-types"
    import {UserOutlined, LockOutlined, WechatOutlined} from "@ant-design/icons-vue"
    import {httpCodeSuccess} from "@/utils/code-http"


    let username = ref("")
    let password = ref("")

    const route = useRoute()
    const router = useRouter()
    const store = useStore()

    const loginSubmit = async () => {
        const form = {
            username: username.value.trim(),
            password: password.value.trim()
        }
        if (form.username === "" || form.password === "") {
            return message.error("用户名密码不能为空")
        }
        const res = await store.dispatch(ADMIN_LOGIN_RESULT, form)

        if (res.code === httpCodeSuccess) {
            const toPath = decodeURIComponent(route.query?.redirect || "/")
            message.success("登录成功！")
            let tokenResult = localStorage.getItem("admin-token")
            const result = await store.dispatch(ADMIN_INFO_RESULT, tokenResult)
            const {roles} = result.data
            const accessedRoutes = await store.dispatch(ROUTERS_GENERATE, roles)
            accessedRoutes.forEach(item => {
                router.addRoute(item)
            })
            router.replace(toPath).then(() => {
                if (route.name === "login") {
                    router.replace("/")
                }
            })
        } else {
            message.info("登录失败")
        }
        return true
    }

</script>


<style scoped>
    .page-login {
        height: 100%;
        background-image: linear-gradient(to right, #f5f7fa, #c3cfe2);
        position: relative;
        margin: 0 auto;
        padding: 1px;
    }

    .page-login .login-wrapper {
        width: 280px;
        height: 400px;
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 10px;
        background: #fff;
    }

    .page-login .login-wrapper .login-title {
        height: 160px;
        font-size: 30px;
        line-height: 160px;
        text-align: center;
    }

    .page-login .login-wrapper .login-input-wrapper {
        width: 240px;
        height: 200px;
        margin: 0 auto;
    }

    .page-login .login-wrapper .login-input-wrapper .login-input {
        width: 100%;
        margin-bottom: 20px;
    }

    .wx-login {
        width: 100%;
        height: 50px;
        margin-top: 20px;
        text-align: center;
    }
</style>