<template>
      <header onselectstart='return false'>
            <img  src="../assets/logo_color.png"  alt="">
            <span class="title">新闻项目</span>
            <router-link to="/" class="log">登录</router-link>
            <router-link to="/register" class="res">注册</router-link>
      </header>
</template>

<script>

export default {
  name: 'Header',
  data: function(){
    return{ 
      path:''
    }
  },
  created:function(){

  },
  methods:{
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
header{
  width: 100%;
  height: 80px;
  background: #ffffff;
  position: relative;
}
header>img{
  width: 7.5rem;
  height: 2.375rem;
  position: absolute;
  left: 9%;
  top: 50%;
  margin-top: -19px;
  cursor: pointer;
}
header>.title{
  font-size: 1.6rem;
  color: #0074FF;
  position: absolute;
  left: 19.6%;
  top: 50%;
  margin-top: -1rem;
}
header>.log{
  font-size: 1.25rem;
  color: #0074FF;
  position: absolute;
  left: 83.5%;
  top: 50%;
  margin-top: -0.81rem;
  cursor: pointer;
  text-decoration: none;
}
header>.res{
  font-size: 1.25rem;
  color: #0074FF;
  position: absolute;
  left: 88.2%;
  top: 50%;
  margin-top: -0.81rem;
  cursor: pointer;
  text-decoration: none;
}
</style>
