<template>
    <div id="footer-component">
        <mu-paper>
            <mu-bottom-nav :value="bottomNav" @change="handleChange">
                <mu-bottom-nav-item href="#/" value="home" title="首页" icon="dashboard"/>
                <mu-bottom-nav-item href="#/about" value="about" title="关于" icon="face"/>
                <mu-bottom-nav-item href="#/my" value="mycenter" title="个人中心" icon="favorite"/>
                <mu-bottom-nav-item href="#/setting" value="sett" title="设置" icon="build"/>
            </mu-bottom-nav>
        </mu-paper>
    </div>
</template>

<script>
    export default{
        mounted(){

        },
        data(){
            return {
                bottomNav: 'home'
            }
        },
        methods: {
            handleChange (val) {
                this.bottomNav = val
            }
        }
    }
</script>

<style scoped>
#footer-component{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 99999;
}
</style>
