export default {
    install (Vue) {
        //设置顶部显示的标题
        Vue.prototype.$SetTitle = function (title) {
            this.$parent.$refs.header.$data.Title = title
        }

        // 获取数据
        Vue.prototype.$GetData = function (par, page) {
            this.$http.post(this.conf.ApiList.HuaBanApi, {
                param: par,
                PageNum: page
            }).then(success => {
                this.$store.state.home.ListData = []
                this.$store.state.home.ListData = success.data.success
                console.log(success.data.success)
                this.$root.$children[0].$refs.header.$data.leftPopup = false
            }).catch(error => {
                console.log(error)
            })

        }

        // 向本地存入收藏的数据
        Vue.prototype.$SetlocalStorage = function (name,value){
            localStorage.setItem(name,JSON.stringify(value))
        }

        // 从本地读取存入的收藏数据
        Vue.prototype.$GetlocalStorage = function (name){
            return JSON.parse(localStorage.getItem(name))
        }

    }
}