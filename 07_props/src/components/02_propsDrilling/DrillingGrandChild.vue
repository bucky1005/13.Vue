<template>
    <h3>GrandChild: {{ injectCount }}</h3>
    <button @click="injectCount++">GrandChild가 증가(수정)</button>
</template>

<script setup>
    import { inject } from "vue";

    const injectCount = inject("count");        // inject("count")의 "count"는 Parent에서 provide에 작성한 이름과 일치 시켜야 한다.
</script>

<style scoped>

</style>