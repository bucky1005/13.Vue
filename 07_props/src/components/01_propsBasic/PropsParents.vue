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
        <DarkMode @toggle="toggleDarkMode"/>    <!-- @: 자식 컴포넌트에서 emit으로 호출하는 함수 -->
        <ReadProps :readValue="readValue"/>
        부모의 readValue: <input v-model="readValue"/>
    </div>
</template>

<!-- 
    props:
    부모에서 자식 컴포넌트로 데이터를 전달하는 경우 우리는 다양한 <slot>을 이용할 수 있었다.
    하지만 slot의 경우 컨텐츠(또는 구조)를 전달하기 위해 사용하는 것으로 단일 데이터를 전달하는 경우 적합하지 않으며
    부모에게 전달받은 데이터를 조작하는데도 어려움이 있다.
    이러한 경우 우리는 데이터만 전달하기 위한 용도로 props를 사용할 수 있다.
    (props는 자식에게 물려주면 자식 컴포넌트는 readOnly로 써야한다. vue는 자식 컴포넌트가 물려받은 값을 수정해도
    어차피 부모 컴포넌트에게 영향을 주지 못해서 readOnly 효과가 난다.)
 -->
<script setup>
    import {ref} from 'vue';        // 객체 구조 분해 할당
    import PropsChild from './PropsChild.vue';
    import DarkMode from './DarkMode.vue';
    import ReadProps from './ReadProps.vue';

    const message = ref('hello');   // message의 초기값을 hello로 설정, ref로 변화를 감지하는 반응형 변수로 설정, 변화 발생 시 reRendering
    const darkState = ref(false);
    const readValue = ref('vue는 어렵다..!');

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