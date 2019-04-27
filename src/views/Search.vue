<template>
    <div class="main">
       <HeaderLog/>
       <SearchContent/>
       <Footer :style="{'background':color}"/>
    </div>
</template>

<script>
import HeaderLog from '../components/HeaderLog.vue'
import SearchContent from '../components/SearchContent.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Search',
  components: {
    HeaderLog,
    Footer,
    SearchContent
  },
  data:function(){
      return{
          color:'#F9F9F9'
      }
  }
}
</script>

