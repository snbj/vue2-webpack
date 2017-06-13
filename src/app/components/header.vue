<template>
    <nav class="clearfix">
        <div class="logo">
            <router-link to="/"><img src="" alt=""></router-link>
        </div>

        <!--</router-link>-->
        <div v-show="show">
            <div class="header-float clearfix">
                <div class="logo clearfix">
                    <img src="" alt="">
                    <span>{{title}}</span>
                </div>
                <div class="ri">
                    <span @click="onClick">打开</span>
                    <i @click="close"></i>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
    export default{
        props: ['onClick', 'isHome', 'showUsr','title'],
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
    //导航
    nav {
        position: relative;
        width: 375rem/@w;
        height: 40rem/@w;
        background: #F5334A;
        .logo {
            height: auto;
            width: 134rem/@w;
            padding-left: 6rem/@w;
            float: left;
            img{
                width: 100%;
            }
        }
        .user {
            position: absolute;
            height: 19rem/@w;
            width: 17rem/@w;
            background-size: 17rem/@w 19rem/@w;
            top: 12rem/@w;
            right: 65rem/@w;
        }
        .list {
            width: 19rem/@w;
            height: 14rem/@w;
            margin: 15rem/@w 15rem/@w 0 28rem/@w;
            float: right;
            background-size: 19rem/@w 14rem/@w;
        }
        .home {
            width: 22.6rem/@w;
            height: 23rem/@w;
            margin: 11rem/@w 13rem/@w 0 24rem/@w;
            background-size: 22.6rem/@w 22.6rem/@w;
            float: right
        }

        .header-float {
            position: absolute;
            width: 375rem/@w;
            height: 64rem/@w;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.06), 0 0 6px 0 rgba(0, 0, 0, 0.19);
            left: 0;top:0;
            z-index: 999;
            overflow: hidden;
            .logo {
                float: left;
                width:auto;
                img {
                    width: 46rem/@w;
                    height: 46rem/@w;
                    display: block;
                    float: left;
                    margin: 9rem/@w 10rem/@w 0;
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
                i {
                    width: 22.6rem/@w;
                    height: 22.6rem/@w;
                    float: left;
                    margin: 21rem/@w 6.4rem/@w 0 10rem/@w;
                }
            }
        }
    }
</style>
