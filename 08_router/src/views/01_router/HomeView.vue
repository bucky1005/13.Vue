<template>
    <div>
        <h1>Home</h1>
        <h2>CurrentRoute = {{ currentRoute }}</h2>
    </div>
</template>

<script setup>
    import { useRoute } from 'vue-router';

    const currentRoute = useRoute();
</script>

<style scoped>

</style>