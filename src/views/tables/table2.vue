<template>
    <div>
        <div style="margin-bottom: 16px">
            <a-button type="primary" :disabled="!hasSelected" :loading="loading" @click="start">
                Reload
            </a-button>
            <span style="margin-left: 8px">
        <template v-if="hasSelected">
          {{ `Selected ${selectedRowKeys.length} items` }}
        </template>
      </span>
        </div>
        <a-table
                bordered
                :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
                :columns="columns"
                :data-source="data"
                :scroll="{x:true}"
                :pagination="pagination"
        />
    </div>
</template>
<script setup>
    import { computed, ref} from "vue"
    const columns = [
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title: "Age",
            dataIndex: "age",
        },
        {
            title: "Address",
            dataIndex: "address",
        },
    ]

    const num0 = 0
    const num1 = 1
    const num10 = 10

    const numPageSize = 10
    const numTotal = 100
    const num1000 = 1000

    const data = ref([])
    for (let ii = num0; ii < num10; ii += num1) {
        data.value.push({
            key: ii,
            name: `Edward King ${ii}`,
            age: num10,
            address: `London, Park Lane no. ${ii}`,
        })
    }
    const pagination = ref({
        pageSize: numPageSize,
        total: numTotal,
        size: "small",
        showSizeChanger: true,
        showQuickJumper: false,
        onChange: (current, pageSize) => {
            listData(current, pageSize)
        }
    })

    pagination.value = {
        pageSize: numPageSize,
        total: numTotal,
        size: "small",
        showTotal: total => `共${total}条数据`,
        showSizeChanger: true,
        pageSizeOptions: ["10", "20", "50"],
        onChange: (current, pageSize) => {
            listData(current, pageSize)
        }
    }

    const selectedRowKeys = ref([])
    const loading = ref(false)

    const hasSelected = computed(() => selectedRowKeys.value.length > num0)

    const start = () => {
        loading.value = true
        setTimeout(() => {
            loading.value = false
            selectedRowKeys.value = []
        }, num1000)
    }

    const onSelectChange = selectedKeys => {
        selectedRowKeys.value = selectedKeys
    }


    const listData = (current, pageSize) => {
        console.log(current)
        console.log(pageSize)
        data.value = []
        for (let ii = num0; ii < num10; ii += num1) {
            data.value.push({
                key: ii,
                name: `lily ${ii}`,
                age: num10,
                address: `lily, Park Lane no. ${ii}`,
            })
        }
    }

</script>