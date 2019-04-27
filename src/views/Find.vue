<template>
  <div>
    <Header/>
    <FindPwd/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import FindPwd from '../components/FindPwd.vue'



export default {
  name: 'find',
  components: {
    Header,
    Footer,
    FindPwd
  }
}
</script>

