<template>
    <div>
        <a-menu
                v-model:selectedKeys="selectedKeys"
                theme="dark"
                mode="inline"
        >
            <template v-for="items in menus">
                <template v-if="!items.hidden && items.children && items.children.length > 1">
                    <a-sub-menu :key="items.name">
                        <template v-slot:title>
                            <my-icon :type="items.meta.icon" :style="{fontSize: '16px'}"/>
                            <span>{{items.meta.title}}</span>
                        </template>
                        <a-menu-item v-for="item in items.children" :key="item.name" @click="clickMenuItem(item.name)">
                            <template v-if="!item.hidden">
                                <my-icon :type="item.meta.icon" :style="{fontSize: '16px'}"/>
                                <span>{{item.meta.title}}</span>
                            </template>
                        </a-menu-item>
                    </a-sub-menu>
                </template>

                <template v-if="!items.hidden && items.children.length < 2">
                    <a-menu-item :key="items.name" @click="clickMenuItem(items.name)">
                        <my-icon :type="items.meta.icon" :style="{fontSize: '16px'}"/>
                        <span>{{items.meta.title}}</span>
                    </a-menu-item>
                </template>
            </template>
        </a-menu>
    </div>
</template>

<script setup>
    import {createFromIconfontCN} from "@ant-design/icons-vue"
    import {defineEmit, useContext, ref, onMounted, watchEffect} from "vue"
    import {useRouter, useRoute} from "vue-router"
    import {useStore} from "vuex"
    import {iconUrl} from "@/utils/icon"
    const MyIcon = createFromIconfontCN({
        scriptUrl: iconUrl,
    })

    const store = useStore()
    const router = useRouter()
    const route = useRoute()

    const menus = ref([])
    watchEffect(() => {
        menus.value = store.getters.routers
    })

    const selectedKeys = ref([""])
    onMounted(() => {
        selectedKeys.value = [route.name]
    })

    defineEmit(["menu-click"])
    const ctx = useContext()
    const clickMenuItem = name => {
        if (router.hasRoute(name)) {
            selectedKeys.value = [name]
            router.push({name})
            // console.log(`子组件Props.selectMenu值${name}`)
            ctx.emit("menu-click", name)
        } else {
            router.push({name: "403"})
        }
    }


</script>

<style scoped>

</style>