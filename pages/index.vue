<template>
  <section class="container">
    <div>
      <!-- <logo/> -->
      <h1 class="title">시험삼아 만든 사이트형식 블로그</h1>
      <h2 class="subtitle">Nuxt.js를 활용하여 Progressive Web App의 형태로 제작할 예정</h2>
      <div class="links">
        <a href="https://www.pizzaalvolo.co.kr/" target="_blank" class="button--green">첫 상용 프로젝트 - 피자알볼로</a>
        <a href="https://github.com/pweasd/nuxt-app" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'

  export default {
    components: {
      Logo,
    },
  }
</script>

<style>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
