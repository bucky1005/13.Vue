<template>
    <h2>child: {{ injectCount }}</h2>
    <GrandChild/>
</template>

<script setup>
    import { inject } from "vue";
    import GrandChild from "./DrillingGrandChild.vue";

    const injectCount = inject('count');    // 부모 컴포넌트에서 provide로 생성해놓은 count 변수를 주입하여 사용
                                        // 사용이 간단하지만, readOnly가 아니기 때문에 자식 컴포넌트에서도 수정 가능하여 코드가 엉킬 수 있음
</script>