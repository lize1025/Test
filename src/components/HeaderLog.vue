<template>
      <header onselectstart='return false'>
            <img  src="../assets/logo_white.png"  alt="">
            <span class="title">新闻项目</span>
            <div class="user">
              <router-link to="/" class="log">
                <img src="" alt="">
              </router-link>
            </div>
            <div class="userid">德玛</div>
            <div class="more" @click="more">
              <img src="../assets/icon_arrow_down.png" alt="" v-show="icon">
              <img src="../assets/icon_arrow_up.png" alt="" v-show="!icon">
           </div>
           <div class="content" v-if="icon==false">
             <div class="myUser">
               <img src="../assets/icon_my.png" alt="">
               <span>我的账户</span>
             </div>
             <div class="quit">
               <img src="../assets/icon_out.png" alt="">
               <span>退出登录</span>
             </div>
           </div>
      </header>
</template>

<script>

export default {
  name: 'Header',
  data: function(){
    return{ 
      path:'',
      icon:true
    }
  },
  methods:{
    more(){
      this.icon=!this.icon
    }
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
  background: #0074FF;
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
  color: #FFFFFF;
  position: absolute;
  left: 19.6%;
  top: 50%;
  margin-top: -1rem;
}
header>.user{
  width: 40px;
  height: 40px;
  position: absolute;
  left: 79.5%;
  top: 52%;
  margin-top: -1.2rem;
  cursor: pointer;
  background: white;
  border-radius: 50%;

}
header>.user>.log{
  

  text-decoration: none;
}
header>.userid{
  font-size: 18px;
  color: #FFFFFF;
  position: absolute;
  left: 83.5%;
  top: 53%;
  margin-top: -0.81rem;
  cursor: pointer;
  text-decoration: none;
}
header>.more{
  position: absolute;
  left: 87.5%;
  top: 41%;
}
header>.content{
  width: 150px;
  height: 118px;
  background: #ffffff;
  box-shadow: -2px -2px 3px 1px rgba(39,52,101,0.08), 2px 2px 3px 1px rgba(39,52,101,0.08);
  float: right;
  margin-right: 172px;
  margin-top: 80px;
  position: relative;
  z-index: 999;
}
header>.content>.myUser{
  font-size: 14px;
  color: #333333;
  position: absolute;
  top: 17%;
  cursor: pointer;
}
header>.content>.myUser>img{
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
  margin-left: 27px;
  width: 22px;
  height: 22px;
}
header>.content>.myUser>span{
  display: inline-block;
  box-sizing: border-box;
  margin-top: 2px;
  margin-left: 13px;
}
header>.content>.quit{
  font-size: 14px;
  color: #333333;
  position: absolute;
  top: 64%;
  cursor: pointer;   
}
header>.content>.quit>img{
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  margin-left: 30px;
  width: 22px;
  height: 22px;
}
header>.content>.quit>span{
  display: inline-block;
  box-sizing: border-box;
  margin-top: 2px;
  margin-left: 11px;
}
</style>
