<template>
    <a-form
            layout="inline"
            :model="formState"
            @finish="handleFinish"
            @finishFailed="handleFinishFailed"
    >
        <a-form-item>
            <a-input v-model:value="formState.user" placeholder="Username" />
        </a-form-item>
        <a-form-item>
            <a-button>
                Log in
            </a-button>
        </a-form-item>
    </a-form>
</template>
<script setup>
    import { ref } from "vue"

    const formState = ref({
        user: "",
    })

    const handleFinish = values => {
        console.log(values, formState)
    }

    const handleFinishFailed = errors => {
        console.log(errors)
    }


</script>