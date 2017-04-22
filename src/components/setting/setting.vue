<template>
    <div class="content-component">
        <mu-list>
            <mu-list-item disabled title="应用设置" describeText="提供一些简单设置"/>
        </mu-list>
        <mu-divider />
        <mu-list>
            <mu-sub-header>主页图片布局设置</mu-sub-header>
            <mu-list-item
                          :afterText="layout"
                          describeText="默认是瀑布流布局展示图片更多，可切换大图模式高清预览MM照"
                         title="瀑布流 / 大图">
                <mu-switch slot="right"
                           v-model="Status"
                           @input="ChageLayout"
                           class="demo-switch" />
            </mu-list-item>
        </mu-list>
        <mu-list>
            <mu-sub-header>切换夜间模式</mu-sub-header>
            <mu-list-item
                          describeText="点击左侧眼睛图标一键切换夜间模式"
                          title="夜间模式">
                <mu-checkbox v-model="themeShow"
                             @input="checkbox"
                             slot="left"
                             uncheckIcon="visibility"
                             checkedIcon="visibility_off"
                             class="demo-checkbox"/>
            </mu-list-item>
        </mu-list>

        <mu-list>
            <mu-list-item title="清除本地缓存"
                          @click="ClearData"
                          describeText="清除个人中心图片缓存(三思而行)">
                <mu-icon value="delete" slot="left"/>
            </mu-list-item>
        </mu-list>
    </div>
</template>

<script>
    //引入主题 白色 / 黑色 的CSS样式 通过 raw-loader 加载器来加载
    import light from '!raw-loader!muse-ui/dist/theme-default.css'
    import dark from '!raw-loader!muse-ui/dist/theme-dark.css'
    export default{
        mounted(){
            this.$SetTitle(this.conf.BaseData.SettingTitle)
        },
        data(){
            return{
                //布局按钮的状态展示
                Status: this.$store.state.home.SwitchConfig,
                //布局切换按钮旁文字
                layout: this.$store.state.home.LayoutTitle,
                //默认主题 light
                theme: 'light',
                //checkbox 单选状态，来控制加载不同不主题
                themeShow: this.$store.state.home.themeShow,
                //主题的CSS样式
                themes: {
                    light,
                    dark
                }
            }
        },
        methods:{
            //切换布局
            ChageLayout(val){
                val ? this.layout
                    = this.$store.state.home.LayoutTitle
                    = '瀑布流':this.layout
                    = this.$store.state.home.LayoutTitle = '大图'
                this.$store.state.home.SwitchConfig = val
            },
            //切换主题样式
            checkbox(val){
                val ? this.changeTheme('dark') : this.changeTheme('light')
                this.$store.state.home.themeShow = val
            },
            //填充用户选择的样式CSS代码
            changeTheme (theme) {
                this.theme = theme
                const styleEl = this.getThemeStyle()
                //开始向style中填充用户选择的CSS样式
                styleEl.innerHTML = this.themes[theme] || ''
                this.themeShow = true
            },
            // 创建内联style，并设置ID = muse-theme
            getThemeStyle () {
                const themeId = 'muse-theme'
                let styleEl = document.getElementById(themeId)
                if (styleEl) return styleEl
                styleEl = document.createElement('style')
                styleEl.id = themeId
                document.body.appendChild(styleEl)
                return styleEl
            },
            // 清除本地缓存
            ClearData () {
                localStorage.clear()
                console.log(localStorage.length)
            }
        }
    }
</script>

<style scoped>
    .mu-text-field{
        width: 96%;
    }
</style>
