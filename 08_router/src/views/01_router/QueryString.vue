<template>
    <div>
        <h1>QueryString</h1>
        <h2>CurrentRoute = {{ currentRoute.query }}</h2>
        <h2>name = {{ currentRoute.query.name }}</h2>
        <h2>age = {{ currentRoute.query.age }}</h2>
    </div>

    <div>
    이름 <input v-model="inputName">
    </div>
</template>

<script setup>
    import { useRoute } from 'vue-router';
    import { ref } from 'vue';

    const currentRoute = useRoute();
    const inputName = ref('');

</script>

<style scoped></style>