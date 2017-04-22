<template>
    <div class="content-component">
        <waterfall
                v-if="this.$store.state.home.SwitchConfig"
                :line-gap="200"
                :min-line-gap="180"
                :max-line-gap="220"
                :watch="this.$store.state.home.ListData">
            <waterfall-slot
                    v-for="(item, index) in this.$store.state.home.ListData"
                    :width="item.file.width"
                    :height="item.file.height"
                    :order="index"
                    :key="item.file_id">

                <img class="mm_img"
                     @click="CollectionImg(item.raw_text,item.file.key)"
                     width="100%"
                     :src="item.file.key | CompleteUrl" alt="">

            </waterfall-slot>
        </waterfall>

        <div v-else>
            <mu-grid-tile v-for="tile, index in this.$store.state.home.ListData" :key="index">
                <img class="mm_img"
                     @click="CollectionImg(tile.raw_text,tile.file.key)"
                     :height="tile.file.height"
                     :src="tile.file.key | CompleteUrl"/>
                <span slot="title">{{tile.raw_text}}</span>
                <span slot="subTitle">by <b>{{tile.source}}</b></span>
            </mu-grid-tile>
        </div>

        <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>

    </div>
</template>

<script>
    // 瀑布流布局
    import Waterfall from 'vue-waterfall/lib/waterfall'
    import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
    export default {
        mounted(){
            //设置标题
            this.$SetTitle(this.conf.BaseData.HomeTitle)
            //是否需要再次请求数据
            if (this.$store.state.home.ListData.length == 0) {
                this.QueryData()
            }
        },
        data(){
            return {
                // 每页展示多少画板id数据
                NumBer: this.conf.BaseData.NumBer,
                // 每页展示多少关键词搜索数据
                KeyWordPage: this.conf.BaseData.KeyWordPage,
                // 关键词
                KeyWord: null,
                // 圆形加载按钮是否展示
                loading: false,
                // 获取父级DOM结构
                scroller: this.$el
            }
        },
        methods: {
            // 请求数据
            QueryData(){
                this.$GetData(this.conf.BaseData.board, this.NumBer)
            },
            // 滚动到底部加载数据
            loadMore(){
                this.loading = true
                setTimeout(() => {
                    if(this.KeyWord == null){
                        this.NumBer += 10
                        this.$GetData(this.conf.BaseData.board, this.NumBer)
                        this.loading = false
                    }else {
                        this.KeyWordPage += 10
                        this.$GetData(this.KeyWord, this.KeyWordPage)
                        this.loading = false
                    }
                },1000)
            },
            // 收藏数据
            CollectionImg(key,value){
                key ?  key : key = '无标题'
                this.$store.state.home.localhostImg.push({
                    title: key,
                    url: value
                })
                this.$SetlocalStorage('UserCollection',this.$store.state.home.localhostImg)
            }
        },
        components: {
            Waterfall,
            WaterfallSlot
        },
        filters: {
            // 图片url地址过滤器，拼接图片完整url地址
            CompleteUrl: function (value) {
                return 'http://img.hb.aicdn.com/' + value
            }
        }
    }

</script>

<style scoped>

</style>
