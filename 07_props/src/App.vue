<script setup>
  import PropsParent from './components/01_propsBasic/PropsParents.vue';
  import DrillingParent from './components/02_propsDrilling/DrillingParents.vue';
</script>

<template>
  <header>
    <PropsParent />   <!-- import 한 PropsParent를 화면에 붙이는 작업 -->
  </header>
  <main>
    <DrillingParent />
  </main>
</template>

<style scoped>
</style>
