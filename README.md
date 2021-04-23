# vue3-vite-ant-design-admin

此分支是 vite + Vue3.x + ant-design 版本

本项目使用Vue3语法糖script setup **[https://github.com/vuejs/rfcs/pull/227](https://github.com/vuejs/rfcs/pull/227)**  
```
<template>
  <Foo :count="count" @click="inc" />
</template>

<script setup>
    import Foo from './Foo.vue'
    import { ref } from 'vue'
    const count = ref(0)
    const inc = () => { count.value++ }
</script>
 
```

## 功能

```

- 权限验证
  - 页面权限

- 完成功能
  - 登陆、退出
  - 动态侧边栏
  - tab标签
  - IconFont 图标
  - Mock 数据
  - jest 配置
  - cypress 配置
  - eslint 配置

- 项目目录
  - mock
  - public
  - src
    - ant-design
    - api
    - assets
    - components
    - layout
      - layout-content
      - layout-header
      - layout-logo
      - layout-menu
      - layout-tabs
    - router
    - store
      - modules
    - utils
    - views
      - error
      - form
      - index
      - login
      - redirect
      - tables
  - tests
    - e2e
    - unit

```



## 项目设置

### 一、Install dependencies

```bash
$ yarn
```

### 二、Compiles and hot-reloads for development

```bash
$ yarn dev
```


### 三、Compiles and minifies for production

```bash
$ yarn build
```


### 四、Run eslint
```
$ yarn t
```

### 五、Run e2e
```
$ yarn e
```


### 六、Lints or fixes files
```
$ yarn elt

# or

$ yarn elt-fix

```

## License

[MIT]() license.

Copyright (c) 2021-present @nmfox.com
