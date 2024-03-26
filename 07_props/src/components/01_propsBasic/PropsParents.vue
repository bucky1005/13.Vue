<!-- vue 파일은 SFC(Single File Component)로, vue 파일 하나 당 하나의 컴포넌트를 구성한다. -->

<!-- Props와 emit을 사용한 흑백 반전 예제 -->
<!--
    props: 부모가 자식에게 값을 물려주는 것
    emit: 자식이 부모의 메소드를 호출하여 사용하는 것
-->
<template>
    <div :class="{container:true, dark: darkState}">
        props 입력: <input v-model="message"/>

        <PropsChild :message="message"/>   <!-- import 한 자식을 화면에 붙이면서 message를 물려주는 작업 -->
        <DarkMode @toggle="toggleDarkMode"/>    <!-- @ : -->
    </div>
</template>

<script setup>
    import {ref} from 'vue';        // 객체 구조 분해 할당
    import PropsChild from './PropsChild.vue';
    import DarkMode from './DarkMode.vue';

    const message = ref('hello');   // message의 초기값을 hello로 설정, ref로 변화를 감지하는 반응형 변수로 설정, 변화 발생 시 reRendering
    const darkState = ref(false);

    function toggleDarkMode() {
        darkState.value =!darkState.value;      // ref로 받아오는 값을 불러올 때에는 .value를 사용한다.
    }
</script>

<style scoped>
.container {
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.dark {
    background-color: black;
    color: white;
}
</style>