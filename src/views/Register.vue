<template>
  <div class="Register">
    <Header/>
    <RegisterContent/>
    <Footer/>
  </div>
</template>

<script>
import RegisterContent from '../components/RegisterContent.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Register',
  components: {
    Header,
    Footer,
    RegisterContent
  }
}
</script>
