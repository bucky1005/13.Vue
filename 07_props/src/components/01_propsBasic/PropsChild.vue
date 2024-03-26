<template>
    <!-- 부모로 부터 전달 받은 것은 객체 형태로 묶여있음. 해당 객체에 들어있는 값을 객체명.변수명으로 호출하여 사용 -->
    <h3>부모로 부터 전달 받은 props: {{ props.message }}</h3>   
</template>

<script setup>
    import { defineProps } from 'vue';      // defineprops라는 함수를 vue에서 가져옴

    /* defineProps 함수를 활용해 String 형의 message props를 받아 props 변수에 담는다. */
    const props = defineProps({
        message: String
    })
</script>

<style scoped>

</style>