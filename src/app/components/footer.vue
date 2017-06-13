<template>
  <footer id="footer" ref="footer">
    <div class="top" @click="onDownload">
      <i></i><span>立即下载APP</span>
    </div>
    <div class="bot">
      <p>Copyright © 2017 Shoelives. All Rights Reserved<br>
        粤ICP备xxxxxxx号</p>
    </div>
  </footer>
</template>
<script>
  export default{
      methods: {
          onDownload(){
              
          }
      },
      mounted() {

      }
  }
</script>
<style lang="less" scoped>
  @w:25;
  footer{
      width: 375rem/@w;bottom:0;z-index: -9;
    .top{height: 60rem/@w;width: 100%;background: #fff;color:#f5334a;
      border-top: .5rem/@w solid #e1e1e1;text-align: center;line-height: 60rem/@w;
      background-size: 15rem/@w 15rem/@w;margin-right: 10rem/@w;vertical-align: middle;}
    span{
      font-size: 16rem/@w;letter-spacing:0.22rem/@w;
      vertical-align: middle;
    }
    }
    .bot{
      height: 50rem/@w;background: #616161;
    p{width: 298.4rem/@w;margin: 0 auto;font-size: 10rem/@w;color:#f6f6f6;
      line-height: 18rem/@w;text-align: center;padding-top: 8rem/@w;}
    }
  }
</style>
