## 花瓣美女 - Vue

项目主要通过后端PHP爬取 [花瓣网](http://huaban.com/) 的数据，然后输出给前端，前端采用Vue.js做数据渲染,来展示用户检索的图片数据。

提供了一些比较人性化的功能，代码写的比较急后期将会不断的完善优化。

## 主要功能

 1：提供关键词搜索，输入你想要查找的关键词即可得到你要的数据 
 
 2：提供花瓣网画板主页ID检索，输入你想查找的ID，即可获得该主页所有的图片数据 
 
 3：首页轻点一下你想要的图片即可将图片收藏到个人中心，方便下次查看。**记住不要重复点哦，否则同一张图片会被收藏两次**
 
 4：收藏图片太多不想看了？你可在设置页面，点击 <b>清除本地缓存</b> 即可清空全部收藏的图片
 
 5：首页图片展示布局切换，提供瀑布流和大图模式。瀑布流单屏展示图片数量多，大图模式看的更清楚，可在设置页面切换
 
 6：提供白天和夜间模式切换，夜晚嫌屏幕灯光太亮？在设置页面点击`眼睛`图标即可一键随心切换
 
 7：长按图片可以保存到本地，注意这里是通过浏览器保存哦！

## 使用说明

1：如何搜索图片？

单击顶部导航，左边`菜单`按钮，或右边`搜索`按钮，展开左边菜单页面，输入你想要的关键词。单击输入框周边空白区域即可实现自动搜索。

![jieshao](http://okkzzhtds.bkt.clouddn.com/jieshao.png)

<br />
2：如何获取画板ID？

搜索页面的 画板ID 你可以通过PC端访问[花瓣网](http://huaban.com/)然后搜索你想要的图片，进入这张图片的用户主页。你会看到地址栏有如下的格式：
[http://huaban.com/boards/35978295/](http://huaban.com/boards/35978295/)，这里的<b>35978295</b> 就是所谓的画板ID，直接复制粘贴到搜索输入框中即可获取该画板主页所有数据 
 
![huaibanid](http://okkzzhtds.bkt.clouddn.com/huaibanid.png) 


## 待优化问题

1：首屏加载没有做加载等待进度条

2：首页图片可以被重复点击收藏

3：不能对个人中心已经收藏的图片进行单个删除(现在是全部清空)

4：图片上拉加载存在逻辑Bug

<b>这些问题不难，很简单只是需要一点点去修复完善，给我点时间我给你更好的产品</b>



## 效果预览


下面提供线上访问地址和截图效果：


### 页面截图

首页瀑布流效果截图：

![mm-index](http://okkzzhtds.bkt.clouddn.com/mm-index.png)

搜索页面：

![mm-sousuo](http://okkzzhtds.bkt.clouddn.com/mm-sousuo.png)

关于截图：

![mm-about](http://okkzzhtds.bkt.clouddn.com/mm-about.png)

个人中心截图：

![mm-my](http://okkzzhtds.bkt.clouddn.com/mm-my.png)

设置页面截图：

![mm-setting](http://okkzzhtds.bkt.clouddn.com/mm-setting.png)

夜间模式截图：

![mm-setting-dark](http://okkzzhtds.bkt.clouddn.com/mm-setting-dark.png)


### 访问地址

<p class="tip">
  访问地址：[http://139.224.210.190/mm/#/](http://139.224.210.190/mm/#/)
</p>

访问地址不推荐微信访问，这里原因不解释，微信太坑自己体会！你可以用手机自带浏览器，或手机版谷歌火狐等浏览器打开！PC端访问地址，请将浏览器调至为手机模式，即可获得最好用户体验！

至于UC浏览器访问图标加载不出来这个真的是你浏览器问题了，不要问我，弃坑UC吧，谷歌火狐你值得拥有！

### 二维码

<img src="http://okkzzhtds.bkt.clouddn.com/1492852708.png" width="280" height="280"/>

### <del>APP下载</del>

<del>app是通过 [云打包](http://www.yundabao.cn/) 这个网站在线将网站打包成app的，其实我原本打算通过mui提供的android sdk自己来打包成混合app。但我是Linux系统没办法用mui 提供的hbuilder开发环境，为了打包一个app去安装Windows操作系统真心不划算。</del>

<del>所以这里就偷懒在线打包了，虽然这些第三方打包不如自己打包的性能好，但是很方便。</del>

<del>二维码如下：</del>

<img src=""/>

