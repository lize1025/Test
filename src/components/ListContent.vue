<template>

  <div class="main">
    <input type="text" class="search" id="search" placeholder="大家都在搜：PDD"  @click="search($event)">
    <router-link to="/search" class="search-btn">
      <img src="../assets/icon_ search.png" alt="">
    </router-link>
    <div class="searchResult" v-show="searchShow">
      <div class="searchList">
        <span class="num">1.</span>
        <span class="hot">Pdd失踪了6666</span>
      </div>
    </div>
    <div class="list">
      <ul>
        <li v-for="(x,index) in list" :key="index" @click="change(index,$event)">
          {{x.id}}
          <div class="line" v-show="isShow==index">
          </div>
       </li>
      </ul>
    </div>
    <div class="content">
       <div class="head">
         <span class="time">10分钟前</span>
         <span class="add">新华社</span>
       </div>
          <router-link to="/details" class="title">首设“虚拟站点”，滴滴小巴正式上线</router-link>
          <span class="name">滴滴  互联网</span>
          <img src="../assets/icon_comment.png" alt="" class="message">
          <span class="mNum">21</span>
          <img src="../assets/icon_saw.png" alt="" class="saw">
          <span class="sNum">1234</span>
          <div class="photo">
            <img src="" alt="">
          </div>
    </div>    
  </div>
</template>

<script>
export default {
  name: 'ListContent',
  data: function(){
    return{
      list:[
        {id:'要闻',show:false},
        {id:'社会',show:false},
        {id:'军事',show:false},
        {id:'科技',show:false},
        {id:'娱乐',show:false}
        ],
      isShow:0,
      searchShow:false
    }
  },
  created(){
    document.addEventListener('click',(e)=>{
    var show = document.getElementById('search')
    var box = show.contains(e.target)
    if(!box){
      this.searchShow = false;
    }
    })
  },
  methods:{ 
    change(index){
      if(this.isShow == index){
        this.isShow =-1 ;
      }else{
        this.isShow=index;  
      }
  },
  search(e){
    e.stopPropagation();
    this.searchShow = !this.searchShow;
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
  .main>.search{
    position: absolute;
    width: 520px;
    height: 50px;
    top: 60px;
    left: 32%;
    background: #FFFFFF;
    border: 1px solid #FF8000;
    padding-left: 20px;
    padding-top: 3px;
    box-sizing: border-box;
    outline: none;
  }
  .main>.search-btn{
     position: absolute;
     width: 75px;
     height: 50px;
     top: 60px;
     left: 61.5%;
     border-radius: 0 0 0 40px;
     outline: none;
     border: none;
     background: #FF8000;
     cursor: pointer;
  }
   .main>.search-btn>img{
     width: 24px;
     height: 24px;
     margin-left: 30px;
     margin-top: 10px;
   }
   .main>.searchResult{
     background: #FFFFFF;
     box-shadow: -2px 0 3px 1px rgba(39,52,101,0.08), 2px 2px 3px 1px rgba(39,52,101,0.08);
     width: 520px;
     height: 216px;
     position: absolute;
     z-index: 999;
     top: 115px;
     left: 32%;
     padding-top: 15px;
     box-sizing: border-box;
   }
   .main>.searchResult>.searchList{
     margin-bottom: 25px;
   }
   .main>.searchResult>.searchList>.num{
     font-size: 14px;
     color: #FF0000;
     letter-spacing: 0;
     text-align: center;
     padding-left: 20px;
     box-sizing: border-box;
   }
   .main>.searchResult>.searchList>.hot{
     font-size: 14px;
     color: #151515;
     letter-spacing: 0;
     text-align: center;
     line-height: 19px;
     margin-left: 2px;
   }
   .main>.list{
     position: absolute;
     width: 134px;
     height: 303px;
     background: #FFFFFF;
     box-shadow: 0 2px 3px 0 rgba(0,0,0,0.12);
     display: table;
     top: 150px;
     left: 150px;
   }
   .main>.list>ul{
     list-style-type: none;
     margin: 0 auto;
   }
   .main>.list>ul>li{
     margin: 10px 0 0 10px;
     line-height: 50px;
     font-size: 16px;
     color: #333333;
     letter-spacing: 0;  
     cursor: pointer;
   }
   .main>.list>ul>li>.line{
     width: 5px;
     height: 28px;
     background: #FF8000;
     position: relative;
     top:8px;
     left: -87px;
     display: inline-block;
   }
   .main>.content{
      width: 780px;
      height: 300px;
      margin: 0 auto;
      background: #FFFFFF;
      position: relative;
      top: 170px;
      margin-bottom: 50px;
   }
   .main>.content>.head{
     width: 140px;
     height: 78px;
     background: #FFFFFF;
     border: 1px solid #DCDCDC;
     position: absolute;
     top: -20px;
     left: -45px;
   }
   .main>.content>.head>.time{
     display: inline-block;
     font-size: 24px;
     color: #9B9B9B; 
     margin-top: 10px;
     margin-left: 15px;
   }
   .main>.content>.head>.add{
     font-size: 14px;
     color: #9B9B9B;
     display: inline-block;
     margin-top: 6px;
     margin-left: 20px;
   }
   .main>.content>.title{
     position: relative;
     display: block;
     font-size: 24px;
     color: #333333;
     top: 15px;
     left: 170px;
     text-decoration: none;
     cursor: pointer;
   }
   .main>.content>.name{
     position: relative;
     font-size: 14px;
     color: #9B9B9B;
     left: 170px;
     top: 25px;
   }
   .main>.content>.message{
     position: relative;
     left: 55%;
     top: 33px;
   }
    .main>.content>.mNum{
     position: relative;
     left: 56.5%;
     top: 28px;
     font-size: 14px;
     color: #9B9B9B;
   }
    .main>.content>.saw{
     position: relative;
     left: 60%;
     top: 31px;
   }
   .main>.content>.sNum{
     position: relative;
     left: 61.5%;
     top: 28px;
     font-size: 14px;
     color: #9B9B9B;
   }
   .main>.content>.photo{
     width: 380px;
     height: 184px;
     border: 1px solid black;
     margin:  0 auto;
     position: relative;
     top: 40px;
     left: -27px;
   }


</style>
