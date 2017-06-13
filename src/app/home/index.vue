<template>
    <section id="user">
        <header-wrap :on-click="toHome" :isHome="isHome" title="home" :showUsr="showUsr"></header-wrap>
        <div style="padding-top:100px;text-align:center;">hello</div>
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
                this.$router.push('/account/index');
            }
        },
        components: {
            HeaderWrap: require('../components/header.vue')
        }
    }
</script>