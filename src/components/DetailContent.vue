<template>
  <div class="main">
      <span class="title">首设“虚拟站点”，滴滴小巴正式上线</span>
      <span class="titleId">新华社</span>
      <span class="titleTime">10分钟前</span>
      <div class="list">
        <div class="cmt">
          <img src="../assets/icon_comment_color.png" alt="" class="comment">
          <span class="commentNum">21</span>
        </div>
        <div class="see">
          <img src="../assets/icon_saw_color.png" alt="" class="saw">
          <span class="sawNum">2342</span>
        </div>
        <div class="line"></div>
        <img src="../assets/icon_share.png" alt="" class="share">
      </div>
  </div>
</template>

<script>
export default {
  name: 'DetailContent',
  data: function(){
    return{

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ::-webkit-input-placeholder{
    font-size: 14px;
    color: #9B9B9B;
  }
  .main{
    width: 100%;
    height: 100%;
    min-height: 870px;
    background: #F9F9F9;
    position: relative;
  }
  .main>.title{
    display: block;
    font-size: 26px;
    color: #333333;
    margin-left: 300px;
    padding-top: 60px;
    margin-bottom: 30px;
  }
  .main>.titleId{
    font-size: 14px;
    color: #333333;
    margin-left: 300px;
  }
  .main>.titleTime{
    font-size: 14px;
    color: #9B9B9B;
    margin-left: 20px;
  }
  .main>.list{
    width: 134px;
    height: auto;
    position: absolute;
    left: 10%;
    top: 15%;
  }
  .main>.list>.cmt{
    margin-bottom: 10px;
  }
  .main>.list>.cmt>.comment{
    vertical-align: middle;
    margin-bottom: 5px;
  }
  .main>.list>.cmt>.commentNum{
    margin-left: 15px;
    font-size: 14px;
    color: #9B9B9B;
  }
  .main>.list>.see{
    margin-bottom: 10px;
  }
  .main>.list>.see>.saw{
    vertical-align: middle;
    margin-bottom: 5px;
  }
  .main>.list>.see>.sawNum{
    margin-left: 15px;
    font-size: 14px;
    color: #9B9B9B;
  }
  .main>.list>.line{
    width: 100%;
    border: 0.5px solid #DCDCDC;
    margin-bottom: 10px;
  }

</style>
