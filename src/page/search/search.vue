<template>
    <div id="search-component">
        <mu-content-block class="search_block">
            <svg class="search_icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8479"><path d="M549.6832 156.228267a390.075733 390.075733 0 0 0-277.6064 115.029333c-153.361067 153.361067-153.361067 403.3536 0 556.714667a392.704 392.704 0 0 0 277.6064 115.029333c99.669333 0 200.9088-38.331733 277.6064-115.029333 153.361067-153.361067 153.361067-403.3536 0-556.714667-75.1616-76.6976-176.401067-115.029333-277.6064-115.029333z" fill="#D9E4F9" p-id="8480"></path><path d="M442.333867 873.949867c-110.421333 0-220.842667-41.403733-305.186134-125.7472-168.686933-168.686933-168.686933-441.685333 0-610.4064s441.685333-168.686933 610.4064 0 168.686933 441.685333 0 610.4064c-82.8416 84.343467-193.262933 125.7472-305.220266 125.7472z m0-785.237334A356.727467 356.727467 0 0 0 190.805333 192.989867c-138.0352 138.0352-138.0352 363.451733 0 501.486933s363.451733 138.0352 501.486934 0 138.0352-363.451733 0-501.486933c-67.4816-70.519467-157.934933-104.277333-249.9584-104.277334z" fill="#91BBF9" p-id="8481"></path><path d="M238.353067 398.506667c-19.933867 0-36.795733-6.144-50.619734-18.397867-18.397867-18.397867-23.005867-44.475733-15.325866-76.663467 7.68-29.149867 24.541867-58.2656 49.083733-82.807466S275.1488 179.2 304.264533 171.554133c30.685867-7.68 58.2656-1.536 76.663467 15.325867 18.397867 18.397867 23.005867 44.475733 15.325867 76.663467-7.68 29.149867-24.541867 58.2656-49.083734 82.807466-35.191467 33.757867-75.093333 52.155733-108.817066 52.155734z m90.487466-199.3728c-7.68 0-13.789867 1.536-18.397866 3.072-23.005867 4.608-47.547733 19.933867-67.515734 39.867733-21.469867 21.504-35.259733 44.475733-41.403733 67.4816-3.072 12.253867-6.144 33.757867 7.68 47.547733 23.005867 23.005867 75.1616 7.68 115.029333-33.757866 21.469867-21.469867 35.259733-44.475733 41.403734-67.4816 3.072-12.253867 6.144-33.757867-7.68-47.547734-7.645867-6.109867-18.397867-9.181867-29.115734-9.181866z m461.073067 557.226666l28.194133 28.194134-32.5632 32.494933-28.194133-28.194133 32.5632-32.494934z m65.1264 43.8272l158.344533 158.3104-54.203733 54.237867-158.344533-158.3104 54.203733-54.237867z" fill="#91BBF9" p-id="8482"></path></svg>

            <mu-text-field label="一触即有.."
                           hintText="画板ID / 关键词"
                           @blur="UserInput"
                           labelFloat/><br/>

            <mu-row gutter>
                <mu-sub-header>推荐关键词</mu-sub-header>
                <mu-col width="10%" tablet="100%" desktop="10">
                    <mu-chip class="demo-chip"
                             v-for="(tab , index) in this.conf.Hotlaber.KeyWordList"
                             :key="index"
                             @click="Hotlaber(tab.labelText)">
                        {{tab.labelText}}
                    </mu-chip>
                </mu-col>
             </mu-row>

            <mu-row gutter>
                <mu-sub-header>推荐画板ID</mu-sub-header>
                <mu-col width="10%" tablet="100%" desktop="10">
                    <mu-chip class="demo-chip"
                             v-for="(tab , index) in this.conf.Hotlaber.BoardIdList"
                             :key="index"
                             @click="Hotlaber(tab.labelText)">
                        {{tab.labelText}}
                    </mu-chip>
                </mu-col>
            </mu-row>

            <mu-snackbar
                    v-if="toast"
                    message="骚年，你不想看美女？"/>



        </mu-content-block>
    </div>
</template>

<script>
    export default{
        mounted(){
        
        },
        data(){
            return{
                toast: false,
            }
        },
        methods:{
            // 输入关键词搜索
            UserInput(val){
                if(val.srcElement.value){
                    this.$root.$children[0].$refs.content.$data.KeyWord = val.srcElement.value
                    this.$GetData(val.srcElement.value,6)
                }else {
                    this.showSnackbar()
                }
            },
            // 推荐标签 单击搜索
            Hotlaber(keyWord){
                this.$root.$children[0].$refs.content.$data.KeyWord = keyWord
                this.$GetData(keyWord,6)
            },
            //展示 toast 弹窗
            showSnackbar () {
                this.toast = true
                if (this.snackTimer) clearTimeout(this.snackTimer)
                this.snackTimer = setTimeout(() => {
                    this.toast = false
                }, 2000)
            },
        }
    }
</script>

<style scoped>
    .search_block{
        padding-top: 30%;
        text-align: center;
    }
    .search_icon{
        width: 20%;
        height: 20%;
        margin: 0 auto;
    }
    .demo-chip{
        margin: 5px;
    }

</style>
