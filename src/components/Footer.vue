<template>
    <footer>
        <span>
        Copyright © 2018 apis.sh All Rights Reserved | 陕ICP备15013925号-3
        </span>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data: function(){
        return{

        }
    }
}
</script>

<style scoped>
    footer{
        width: 100%;
        height: 70px;
        text-align: center;
        position: absolute;
        bottom: -70px;
    }
    footer>span{
        display: inline-block;
        margin-top: 30px;
        font-size: 12px;
        color: #333333;
    }
</style>


