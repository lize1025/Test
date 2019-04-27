<template>
  <div>
    <HeaderLog/>
    <ListContent/>
    <Footer :style="{'background':color}"/>
  </div>
</template>

<script>
import ListContent from '../components/ListContent.vue'
import HeaderLog from '../components/HeaderLog.vue'
import Footer from '../components/Footer.vue'

export default {
  data:function(){
    return{
      color:'#F9F9F9'
    }
  },
  name: 'list',
  components: {
    HeaderLog,
    Footer,
    ListContent
  }
}
</script>

<style scoped>
  .list{
    width: 100%;
    height: 100%;
  }
</style>

