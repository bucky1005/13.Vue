<script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>

<!-- 
    npm install vue-router@next

    RouterLink
    사용자가 다른 라우트로 이동할 수 있도록 하는 링크를 생성하는데 사용된다.
    RouterLink는 다음과 같은 속성들을 가지고 있다.
    to: 이동할 라우트의 경로를 지정(uri)
    active-class: 현재 라우트와 일치할 때 적용할 css 클래스를 지정(활성화된 RouterLink에 css 적용 시 사용)

    RouterView
    현재 라우트에 해당하는 컴포넌트를 렌더링하는 지점을 정하기 위해 사용된다.
    vue-router가 현재 uri에 따라 매칭되는 컴포넌트를 찾으면, 해당 컴포넌트를 RouterView 내부에 렌더링하여
    이를 통해 페이지 간의 전환을 구현할 수 있다.

    일반적으로 RouterView는 RouterLink와 함께 사용되며 라우팅 기능을 완성한다.
 -->
<template>
    <header>
        <h1>Router 사용하기</h1>
        <hr>
        <div class="wrapper">
            <h2>basic router</h2>
            <nav>
                <RouterLink to="/" active-class="active">Home</RouterLink>
                <!-- 경로에 '/'가 추가되면 경로의 뎁스가 추가되기 때문에 router.js에도 수정이 필요하지만
                    쿼리스트링 방식은 경로가 추가되는 것이 아니므로 별도의 수정 작업을 요구하지 않는다.
                -->
                <RouterLink to="/pathvariable/1" active-class="active" replace>PathVariable</RouterLink>
                <RouterLink to="/querystring?name=홍길동&age=20" active-class="active">QueryString</RouterLink>
            </nav>
        </div>
    </header>

    <main>
        <RouterView /> <!-- RouterView: Routerlink를 통해 매핑된 컴포넌트가 그려지는 곳 -->
    </main>
</template>

<style scoped>
nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
    font-size: 30px;
}

a {
    margin-left: 10px;
}

.active {
    color: red;
}

main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

header {
    text-align: center;
}
</style>
