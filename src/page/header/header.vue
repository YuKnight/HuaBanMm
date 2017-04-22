<template>
    <div id="header-component">
        <mu-appbar :title="Title">
            <mu-icon-button icon="menu" slot="left" @click="open"/>
            <mu-icon-menu icon="search" slot="right">
                <mu-menu-item @click="open" title="搜索"/>
                <mu-menu-item href="#/about" title="关于我"/>
            </mu-icon-menu>
        </mu-appbar>

        <!--搜索组件-->
        <mu-popup position="left" popupClass="demo-popup-left" :open="leftPopup" @close="close">
                <search-component></search-component>
            </mu-content-block>
        </mu-popup>


    </div>
</template>

<script>
    import SearchComponent from './../search/search.vue'
    export default{
        data(){
            return{
                Title: '',
                leftPopup: false,
            }
        },
        methods:{
            open () {
                this.leftPopup = true
            },
            close () {
                this.leftPopup = false
            }
        },
        components:{
            SearchComponent
        }
    }
</script>

<style scoped>
#header-component{
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 99999;
}
</style>
