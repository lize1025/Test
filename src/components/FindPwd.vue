<template>
    <div class="main">
        <div class="content">
            <span class="find">找回密码</span>
            <input type="text" class="user" placeholder="输入手机号码">
            <input type="password" class="code" placeholder="图形验证码">
            <div class="imgCode"><img src="" alt=""></div>
            <input type="password" class="note" placeholder="短信验证码">
            <input type="text" class="pwd" placeholder="输入新密码">
            <input type="text" class="pwds" placeholder="确认密码">
            <button class="noteCode">获取验证码</button>
            <button class="finish">完成</button>
        </div>
    </div>
</template>

<script>
export default {
   name: 'findpwd',
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
        height: 69%;
        background: #466d9c;
        box-shadow: 6px 6px 14px 5px rgba(39,52,101,0.08);
        position: absolute;
        top: 13%;
        left: 46.8%;
        vertical-align:middle;
        position: relative;
    }
    .main>.content>.find{
        font-size: 36px;
        color: #FFFFFF;
        position: absolute;
        top: 7.5%;
        left: 39%;
    }
    .main>.content>.user{
        width: 63%;
        height: 8%;
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
        height: 8%;
        background: #FFFFFF;
        border: 1px solid #FFFFFF;
        border-radius: 2px;
        position: absolute;
        top: 30%;
        left: 19%;
        padding-left: 10px;
        box-sizing: border-box;
    }
    .main>.content>.imgCode{
        display: block;
        width: 25%;
        height: 8%;
        background: #FFFFFF;
        border: 1px solid #FFFFFF;
        border-radius: 2px;
        position: absolute;
        top: 30%;
        left: 57%;
        padding-left: 10px;
        box-sizing: border-box;
        cursor: pointer;
    }
    .main>.content>.note{
        display: block;
        width: 36%;
        height: 8%;
        background: #FFFFFF;
        border: 1px solid #FFFFFF;
        border-radius: 2px;
        position: absolute;
        top: 41%;
        left: 19%;
        padding-left: 10px;
        box-sizing: border-box;
    }
    .main>.content>.noteCode{
        display: block;
        width: 25%;
        height: 8%;
        background: #FF8000;
        position: absolute;
        top: 41%;
        left: 57%;
        font-size: 16px;
        color: #FFFFFF;
        cursor: pointer;
        border: none;
    }
     .main>.content>.pwd{
        width: 63%;
        height: 8%;
        display: block;
        background: #FFFFFF;
        border: 1px solid #FFFFFF;
        border-radius: 2px;
        position: absolute;
        top: 52%;
        left: 19%;
        padding-left: 10px;
        box-sizing: border-box;
    }
     .main>.content>.pwds{
        width: 63%;
        height: 8%;
        display: block;
        background: #FFFFFF;
        border: 1px solid #FFFFFF;
        border-radius: 2px;
        position: absolute;
        top: 63%;
        left: 19%;
        padding-left: 10px;
        box-sizing: border-box;
    }
    .main>.content>.finish{
        display: block;
        width: 63%;
        height: 7.5%;
        background: #FF8000;
        position: absolute;
        top: 78%;
        left: 19%;
        font-size: 20px;
        color: #FFFFFF;
        cursor: pointer;
        border: 0;
    }
</style>
