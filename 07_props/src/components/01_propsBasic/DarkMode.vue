<template>
    <!-- 부모의 toggle 이벤트를 호출하는 emit 함수 적용 -->
    <button @click="emit('toggle')">다크 모드</button>
</template>

<script setup>
    import { defineEmits } from 'vue';

    /* 부모로부터 물려받은 toggle이라는 이름의 이벤트를 호출할 수 있는 함수 반환 받기(defineEmits를 활용하여 해당 이벤트를 배열로 저장)  */
    /* 하나의 emit 함수에 여러개의 이벤트를 물려받아 배열에 저장할 수 있음
        ex) defineEmits(['toggle', 'change', 'test']);
    */
    const emit = defineEmits(['toggle']);
</script>