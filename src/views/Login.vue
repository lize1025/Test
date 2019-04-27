<template>   
  <div>
    <Header/>
    <LoginContent/>
    <Footer/>
  </div>
</template>

<script>
import LoginContent from '../components/LoginContent.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'login',
  components: {
    Header,
    Footer,
    LoginContent 
  }
}
</script>

<style scoped>
  .login{
    width: 100%;
    height: 100%;
  }
</style>

