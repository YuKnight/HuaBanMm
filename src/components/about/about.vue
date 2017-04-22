<template>
    <div class="content-component">
        <mu-sub-header>功能简介</mu-sub-header>
        <mu-content-block>
            1：提供关键词搜索，输入你想要查找的关键词即可得到你要的数据 <br><br>
            2：提供花瓣网画板主页ID检索，输入你想查找的ID，即可获得该主页所有的图片数据 <br><br>
            3：首页轻点一下图片即可将图片收藏到个人中心，方便下次查看
        </mu-content-block>

        <mu-sub-header>使用说明</mu-sub-header>
        <mu-divider />
        <mu-content-block>
            1：单击顶部导航，左边 <mu-icon value="menu"/>按钮，或

            右边<mu-icon value="search"/>按钮，展开左边菜单页面，输入你想要的关键词。
            单击输入框外部空白区域即可自动搜索


        </mu-content-block>
        <mu-content-block>
            2：搜索页面的 画板ID 你可以通过PC端检索你想要的图片，然后进入这张图片的用户主页。
            地址栏格式如下:
            <a href="http://huaban.com/boards/35978295/">http://huaban.com/boards/35978295/</a>
            ，这里的
            <b>35978295</b> 就是所谓的画板ID，直接复制粘贴到搜索输入框中即可获取该画板主页所有数据
        </mu-content-block>

        <mu-sub-header>数据来源</mu-sub-header>
        <mu-divider />
        <mu-content-block>
            1：网站的数据是通过后端PHP爬虫从第三方网站 <a href="http://huaban.com/">花瓣网</a>
            爬取下来的，然后我的后端做了数据截取返回给前端关键性的数据结构
        </mu-content-block>

        <mu-sub-header>其他说明</mu-sub-header>
        <mu-divider />
        <mu-content-block>
            1：网站还有一些地方存在一些小问题，例如第一次关键词检索后再次检索图片默认展示的个数6被上次检索的
            总个数覆盖。<br><br>
            其他的一些问题现在还没有发现，原谅我只顾着看美女图片了！
            <br><br>
            有任何问题可以向我及时反馈，你可以通过一下方式找到我
            <ul>
                <li>QQ：2271608011</li>
                <li>技术群：540144097</li>
                <li>博客：geekhelp.cn</li>
            </ul>
        </mu-content-block>

    </div>
</template>

<script>
    export default{
        mounted(){
            this.$SetTitle(this.conf.BaseData.AboutTitle)
        }
    }
</script>

<style scoped>

</style>
