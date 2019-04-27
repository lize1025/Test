<template>
    <div class="main">
       <HeaderLog/>
       <DetailContent/>
       <Footer :style="{'background':color}"/>
    </div>
</template>

<script>
import HeaderLog from '../components/HeaderLog.vue'
import DetailContent from '../components/DetailContent.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Details',
  components: {
    HeaderLog,
    Footer,
    DetailContent
  },
  data:function(){
      return{
          color:'#F9F9F9'
      }
  }
}
</script>

