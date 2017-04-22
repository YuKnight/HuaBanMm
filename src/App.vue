<template>
  <div id="app">
      <header-component ref="header"></header-component>

         <router-view ref="content"></router-view>
      <footer-component ref="footer"></footer-component>
  </div>
</template>

<script>
    import HeaderComponent from './page/header/header.vue'
    import FooterComponent from './page/footer/footer.vue'
    export default {
      name: 'app',
      components:{
          HeaderComponent,
          FooterComponent
      }
    }
</script>

<style>
.content-component{
    margin: 70px 0 88px 0;
}
.demo-popup-left {
    display: flex;
    width: 85%;
    max-width: 375px;
    height: 100%;
    padding: 24px;
    align-items: baseline;
}
.mm_img{
    padding: 2px;
    width: 100%;
}
</style>
