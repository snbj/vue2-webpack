<template>
    <section id="user">
        <header-wrap :on-click="toHome" :isHome="isHome" title="account" :showUsr="showUsr"></header-wrap>
        
        <mt-popup v-model="$store.state.isSign" closeOnClickModal="true" position="bottom">
            <login-wrap></login-wrap>
        </mt-popup>
    </section>
</template>

<script>
    export default{
        data(){
            return {
                isHome: false,
                showUsr: false,
                item: {}
            }
        },
        methods: {
            toHome() {
                this.$router.push('/');
            }
        },
        created(){ 
            this.$store.commit('upSing', {
                is: true
            });
        },
        components: {
            HeaderWrap: require('../components/header.vue'),
            LoginWrap: require('../components/login/index.vue')
        }
    }
</script>

<style lang="less">
    @import '../../assets/css/preset.less';

    @w: 25;
    #user {
        background: #f6f6f6;
        height: 100vh;
    }
</style>
