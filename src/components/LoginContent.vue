<template>
    <div class="main">
        <div class="content">
            <span class="login">登录</span>
            <input type="text" class="user" placeholder="手机号/用户名">
            <input type="password" class="pwd" placeholder="密码">
            <router-link to="/list" class="logins">登录</router-link>
            <router-link to="/find" class="pwds">忘记密码？</router-link>
            <span class="line"></span>
            <span class="txt">还没有APIS账号吗？</span>
            <button class="reg">注册</button>
        </div>
    </div>
</template>

<script>
export default {
   name: 'login',
   data: function(){
    return{ 
     }
  },
  methods:{

    }
  }
</script>

<style scoped>
    input::-webkit-input-placeholder{
        font-size: 16px;
        color: #9B9B9B;
    }
    .main{
        background: url('../assets/bg_sign.png') no-repeat;
        background-size: cover;
        width: 100%;
        height: 874px;
        position: relative;
    }
    .main>.content{
        width: 39.4%;
        height: 69%;
        background: #466d9c;
        box-shadow: 6px 6px 14px 5px rgba(39,52,101,0.08);
        position: absolute;
        top: 13%;
        left: 46.8%;
        vertical-align:middle;
        position: relative;
    }
    .main>.content>.login{
        font-size: 36px;
        color: #FFFFFF;
        position: absolute;
        top: 15.5%;
        left: 45%;
    }
    .main>.content>.user{
        width: 63%;
        height: 8%;
        display: block;
        background: #FFFFFF;
        border: 1px solid #FFFFFF;
        border-radius: 2px;
        position: absolute;
        top: 29.5%;
        left: 19%;
        padding-left: 10px;
        box-sizing: border-box;
    }
    .main>.content>.pwd{
        display: block;
        width: 63%;
        height: 8%;
        background: #FFFFFF;
        border: 1px solid #FFFFFF;
        border-radius: 2px;
        position: absolute;
        top: 40.5%;
        left: 19%;
        padding-left: 10px;
        box-sizing: border-box;
    }
    .main>.content>.logins{
        display: block;
        width: 63%;
        height: 8%;
        background: #FF8000;
        position: absolute;
        top: 55.5%;
        left: 19%;
        font-size: 20px;
        color: #FFFFFF;
        cursor: pointer;
        border: 0;
        text-align: center;
        text-decoration: none;
        box-sizing: border-box;
        padding-top: 8px;
    }
    .main>.content>.pwds{
        display: block;
        position: absolute;
        top: 65.5%;
        left: 70%;
        font-size: 14px;
        color: #FFFFFF;
        cursor: pointer;
        text-decoration: none;
    }
    .main>.content>.line{
        display: block;
        width: 100%;
        border: 0.5px solid #FFFFFF;
        position: absolute;
        top: 85%;

    }
    .main>.content>.txt{
        display: block;
        font-size: 14px;
        color: #FFFFFF;
        position: absolute;
        top: 91%;
        left: 5%;
        cursor: pointer;
    }
    .main>.content>.reg{
        display: block;
        font-size: 20px;
        color: #0D407E;
        position: absolute;
        top: 90%;
        left: 85%;
        cursor: pointer;
    }
</style>
