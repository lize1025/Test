<template>
    <div class="main">
        <div class="content">
            <span class="register">注册</span>
            <input type="text" class="user" placeholder="账号（请输入手机号码）">
            <input type="password" class="code" placeholder="图形验证码">
            <div class="imgCode"><img src="" alt=""></div>
            <input type="password" class="note" placeholder="短信验证码">
            <input type="text" class="pwd" placeholder="密码（请输入6~20位字符）">
            <input type="text" class="pwds" placeholder="确认密码">
            <button class="noteCode">获取验证码</button>
            <button class="registers">注册</button>
            <span class="line"></span>
            <span class="txt">已经有APIS账号了</span>
            <button class="log">登录</button>
        </div>
    </div>
</template>

<script>
export default {
   name: 'register',
   data: function(){
    return{ 
     }
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
        height: 80%;
        background: #466d9c;
        box-shadow: 6px 6px 14px 5px rgba(39,52,101,0.08);
        position: absolute;
        top: 13%;
        left: 46.8%;
        vertical-align:middle;
        position: relative;
    }
    .main>.content>.register{
        font-size: 36px;
        color: #FFFFFF;
        position: absolute;
        top: 7.5%;
        left: 45%;
    }
    .main>.content>.user{
        width: 63%;
        height: 7.5%;
        display: block;
        background: #FFFFFF;
        border: 1px solid #FFFFFF;
        border-radius: 2px;
        position: absolute;
        top: 19%;
        left: 19%;
        padding-left: 10px;
        box-sizing: border-box;
    }
    .main>.content>.code{
        display: block;
        width: 36%;
        height: 7.5%;
        background: #FFFFFF;
        border: 1px solid #FFFFFF;
        border-radius: 2px;
        position: absolute;
        top: 29%;
        left: 19%;
        padding-left: 10px;
        box-sizing: border-box;
    }
    .main>.content>.imgCode{
        display: block;
        width: 25%;
        height: 7.5%;
        background: #FFFFFF;
        border: 1px solid #FFFFFF;
        border-radius: 2px;
        position: absolute;
        top: 29%;
        left: 57%;
        padding-left: 10px;
        box-sizing: border-box;
        cursor: pointer;
    }
    .main>.content>.note{
        display: block;
        width: 36%;
        height: 7.5%;
        background: #FFFFFF;
        border: 1px solid #FFFFFF;
        border-radius: 2px;
        position: absolute;
        top: 39%;
        left: 19%;
        padding-left: 10px;
        box-sizing: border-box;
    }
    .main>.content>.noteCode{
        display: block;
        width: 25%;
        height: 7.5%;
        background: #FF8000;
        position: absolute;
        top: 39%;
        left: 57%;
        font-size: 16px;
        color: #FFFFFF;
        cursor: pointer;
        border: none;
    }
     .main>.content>.pwd{
        width: 63%;
        height: 7.5%;
        display: block;
        background: #FFFFFF;
        border: 1px solid #FFFFFF;
        border-radius: 2px;
        position: absolute;
        top: 49%;
        left: 19%;
        padding-left: 10px;
        box-sizing: border-box;
    }
     .main>.content>.pwds{
        width: 63%;
        height: 7.5%;
        display: block;
        background: #FFFFFF;
        border: 1px solid #FFFFFF;
        border-radius: 2px;
        position: absolute;
        top: 59%;
        left: 19%;
        padding-left: 10px;
        box-sizing: border-box;
    }
    .main>.content>.registers{
        display: block;
        width: 63%;
        height: 7.5%;
        background: #FF8000;
        position: absolute;
        top: 74%;
        left: 19%;
        font-size: 20px;
        color: #FFFFFF;
        cursor: pointer;
        border: 0;
    }
    .main>.content>.line{
        display: block;
        width: 100%;
        border: 0.5px solid #FFFFFF;
        position: absolute;
        top: 89%;

    }
    .main>.content>.txt{
        display: block;
        font-size: 14px;
        color: #FFFFFF;
        position: absolute;
        top: 93.5%;
        left: 5%;
        cursor: pointer;
    }
    .main>.content>.log{
        display: block;
        font-size: 20px;
        color: #0D407E;
        position: absolute;
        top: 92.5%;
        left: 85%;
        cursor: pointer;
    }
</style>
