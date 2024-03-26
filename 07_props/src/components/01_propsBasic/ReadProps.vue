<!-- Props의 read only 속성 -->

<template>
    <h1> {{  props.readValue }}</h1>
    <!--
        props로 물려받은 값은 readOnly를 권장하지만
        해당 예제에서는 자식 컴포넌트에서도 input 태그에 v-model 사용하여 해당 값을 변경할 수 있도록 구현함
        (하지만 실행 시 자식의 값을 바꿔도 부모까지 반영되지 않음 => props 객체로 한번 감싸져 있어 결합도가 낮아졌기 때문)
        (props.readValue가 아닌 readValue로 하면 값이 바뀌게됨)
    -->
    자식의 readValue: <input v-model="props.readValue"/>
</template>

<script setup>
    import { defineProps } from 'vue';

    const props = defineProps ({
        readValue: String
    })
</script>