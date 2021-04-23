<template>
    <a-layout>
        <a-layout-sider
                v-model:collapsed="collapsed"
                :trigger="null"
                :collapsedWidth="collapsedWidth"
                collapsible
        >
            <lay-logo :collapsed="collapsed"/>
            <lay-menu @menu-click="goTo"/>
        </a-layout-sider>
        <a-layout>
            <lay-header :collapsed="collapsed" @collapse-click="collapseChange"/>

            <a-layout-content :style="mainStyle">
                <LayTab/>
                <lay-content :path="path"/>

            </a-layout-content>
        </a-layout>
    </a-layout>
</template>


<script setup>
    import {ref, computed, watch} from "vue"
    import LayHeader from "./layout-header/layout-header.vue"
    import LayTab from "./layout-tabs/layout-tabs.vue"
    import LayLogo from "./layout-logo/layout-logo.vue"
    import LayMenu from "./layout-menu/layout-menu.vue"
    import LayContent from "./layout-content/layout-content.vue"

    const mainStyle = ref({
        margin: "24px 16px",
        padding: "10px",
        background: "#fff",
        minHeight: "700px"
    })

    const collapsedWidth = computed(() => {
        console.log(document.body.clientWidth)
        if (document.body.clientWidth < "400") {
            return "0"
        }
        return "80"
    })

    const path = ref("")
    const selectedKeys = ref(["404"])

    let collapsed = ref(false)
    const collapseChange = collapseState => {
        // console.log(`父组件接收 值${collapseState}`)
        collapsed.value = collapseState
        // console.log(`父组件collapsed值${collapsed.value}`)
    }

    const goTo = name => {
        path.value = name
    }


</script>

<style scoped>

</style>