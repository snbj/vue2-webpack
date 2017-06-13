<template>
    <div v-show="show">
        <div class="header-float clearfix">
            <div class="logo clearfix">
                <img src="" alt="">
                <span>title</span>
            </div>
            <div class="ri">
                <span>打开</span>
                <i @click="close"><img src="" alt=""></i>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                show:true
            }
        },
        methods: {
            close(){
                this.show=false;
            }
        }
    }
</script>

<style lang="less" scoped>
    @w: 25;
    .header-float {
        position: absolute;
        width: 375rem/@w;
        height: 64rem/@w;
        background: rgba(255, 255, 255, 0.98);
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.06), 0 0 6px 0 rgba(0, 0, 0, 0.19);
        left: 0;top:0;
        z-index: 999;
        .logo {
            float: left;
            img {
                width: 46rem/@w;
                height: 46rem/@w;
                display: block;
                float: left;
                margin: 9rem/@w 10rem/@w 16rem/@w;
            }
            span {
                display: block;
                float: left;
                font-size: 14px;
                color: #616161;
                letter-spacing: 0.19px;
                line-height: 64rem/@w;
            }
        }
        .ri {
            float: right;
            span {
                border: 1rem/@w solid #F5334A;
                border-radius: 4rem/@w;
                width: 68rem/@w;
                height: 30rem/@w;
                line-height: 33rem/@w;
                text-align: center;
                font-size: 14rem/@w;
                color: #F5334A;
                letter-spacing: 0.19rem/@w;
                float: left;
                margin-top: 17rem/@w;
            }
        }
    }

</style>
