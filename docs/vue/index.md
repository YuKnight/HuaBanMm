## 技术栈
  
- Vue.js：最火前端框架
- Vuex：状态管理模式
- Webpack：打包工具
- Muse-ui：UI库
- Vue-Router：路由
- Vue-waterfall：瀑布流
- vue-resource：Ajax网络请求，原谅我不喜欢axios
- raw-loader：切换Muse-ui主题实现夜间模式

## package.json


```txt
{
  "dependencies": {
    "muse-ui": "^2.0.2",
    "vue": "^2.2.6",
    "vue-router": "^2.3.1",
    "vue-waterfall": "^1.0.6",
    "vuex": "^2.3.1"
  },
  "devDependencies": {
    "autoprefixer": "^6.7.2",
    "babel-core": "^6.22.1",
    "babel-loader": "^6.2.10",
    "babel-plugin-transform-runtime": "^6.22.0",
    "babel-preset-env": "^1.3.2",
    "babel-preset-stage-2": "^6.22.0",
    "babel-register": "^6.22.0",
    "chalk": "^1.1.3",
    "compression-webpack-plugin": "^0.4.0",
    "connect-history-api-fallback": "^1.3.0",
    "copy-webpack-plugin": "^4.0.1",
    "css-loader": "^0.28.0",
    "eventsource-polyfill": "^0.9.6",
    "express": "^4.14.1",
    "extract-text-webpack-plugin": "^2.0.0",
    "file-loader": "^0.11.1",
    "friendly-errors-webpack-plugin": "^1.1.3",
    "html-webpack-plugin": "^2.28.0",
    "http-proxy-middleware": "^0.17.3",
    "opn": "^4.0.2",
    "optimize-css-assets-webpack-plugin": "^1.3.0",
    "ora": "^1.2.0",
    "raw-loader": "^0.5.1",
    "rimraf": "^2.6.0",
    "semver": "^5.3.0",
    "shelljs": "^0.7.6",
    "url-loader": "^0.5.8",
    "vue-loader": "^11.3.4",
    "vue-resource": "^1.3.1",
    "vue-style-loader": "^2.0.5",
    "vue-template-compiler": "^2.2.6",
    "webpack": "^2.3.3",
    "webpack-bundle-analyzer": "^2.2.1",
    "webpack-dev-middleware": "^1.10.0",
    "webpack-hot-middleware": "^2.18.0",
    "webpack-merge": "^4.1.0"
  }
}
```

## 项目结构

```txt
├── build
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── dist
│   ├── index.html
│   └── static
│       ├── css
│       │   ├── app.53f807de449c7a4184666c082630664a.css
│       │   └── app.53f807de449c7a4184666c082630664a.css.gz
│       └── js
│           ├── 0.dfb2980fd0ede1a3937b.js
│           ├── 0.dfb2980fd0ede1a3937b.js.gz
│           ├── 1.6d6a0958e07704b99e42.js
│           ├── 2.7991a06efee94702c203.js
│           ├── app.d9349537fd61b85436d6.js
│           ├── app.d9349537fd61b85436d6.js.gz
│           ├── manifest.c0d43bdc0c2ea119a2b2.js
│           ├── vendor.cf1cd2a8230feb700700.js
│           └── vendor.cf1cd2a8230feb700700.js.gz
├── docs
│   ├── about
│   │   └── index.md
│   ├── code
│   │   └── index.md
│   ├── config.js
│   ├── index.html
│   ├── php
│   │   └── index.md
│   ├── README.md
│   └── vue
│       └── index.md
├── index.html
├── package.json
├── README.md
├── src
│   ├── App.vue
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   ├── about
│   │   │   └── about.vue
│   │   ├── home
│   │   │   └── home.vue
│   │   ├── my
│   │   │   └── my.vue
│   │   └── setting
│   │       └── setting.vue
│   ├── config
│   │   └── config.js
│   ├── main.js
│   ├── page
│   │   ├── footer
│   │   │   └── footer.vue
│   │   ├── header
│   │   │   └── header.vue
│   │   └── search
│   │       └── search.vue
│   ├── router
│   │   └── router.js
│   ├── store
│   │   └── home.js
│   └── util
│       └── util.js
└── static
```

## 问题记录

### 1：Muse-ui主题切换

1：按照 Muse-ui 官网给的切换主题代码来，发现问题太多。压根就不对，这里记录一下防止下次再踩坑！

官网给的代码链接在这：

<p class="tip">
  项目地址：[http://www.muse-ui.org/#/theme](http://www.muse-ui.org/#/theme)
</p>


核心代码如下：

```javascript
...
<script>
import light from '!raw!muse-ui/dist/theme-default.css'
import dark from '!raw!muse-ui/dist/theme-dark.css'
import carbon from '!raw!muse-ui/dist/theme-carbon.css'
import teal from '!raw!muse-ui/dist/theme-teal.css'
export default {
  data () {
    return {
      theme: 'light',
      themes: {
        light,
        dark,
        carbon,
        teal
      }
    }
  },
  changeTheme (theme) {
    this.theme = theme
    const styleEl = this.getThemeStyle()
    styleEl.innerHTML = this.themes[theme] || ''
  },
  getThemeStyle () {
    const themeId = 'muse-theme'
    let styleEl = document.getElementById(themeId)
    if (styleEl) return styleEl
    styleEl = document.createElement('style')
    styleEl.id = themeId
    document.body.appendChild(styleEl)
    return styleEl
  }
}
</script>
...
```

坑一：changeTheme()和getThemeStyle()方法错了，外部缺少`methods:{}`！

坑二：`raw-loader`写法错误

```javascript
...
import light from '!raw!muse-ui/dist/theme-default.css'
...
```

在安装`raw-loader`后发现上面代码中的 `!raw!` 是错的，压根不对！！经过一番研究发现应该这样下：

正确的姿势：

```javascript
...
import light from '!raw-loader!muse-ui/dist/theme-default.css'
...
```

至于完整的代码可以参照我的：

```javascript
...
<script>
//引入主题 白色 / 黑色 的CSS样式 通过 raw-loader 加载器来加载
import light from '!raw-loader!muse-ui/dist/theme-default.css'
import dark from '!raw-loader!muse-ui/dist/theme-dark.css'
export default{
    data(){
        return{
            //默认主题 light
            theme: 'light',
            //主题的CSS样式
            themes: {
                light,
                dark
            }
        }
    },
    methods:{
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
        }
    }
}
</script>
...
```

### 2：Vue-waterfall 瀑布流

刚用`Vue-waterfall`确实不知道怎么搞，一头雾水看了官方文档反而看的一知半解，所以直接看代码理解的。

<p class="tip">
  项目地址：[vue-waterfall](https://github.com/MopTym/vue-waterfall) <br />
  代码实例：[demo/horizontal-line.html](https://github.com/MopTym/vue-waterfall/blob/master/demo/horizontal-line.html)
</p>

如果你按照GitHub主页给的示例来，真机测试后很多设备所有图片都会垂直显示布局，然而我屏幕设备很大。这里需要参考官方demo进行相关配置。

例如：

```html
...
<div id="app">
  <waterfall
    :line="line"
    :line-gap="200"
    :min-line-gap="180"
    :max-line-gap="220"
    :watch="items"
    @reflowed="reflowed"
    ref="waterfall"
  >
    <!-- each component is wrapped by a waterfall slot -->
    <waterfall-slot
      v-for="(item, index) in items"
      :width="item.width"
      :height="item.height"
      :order="index"
      :key="item.index"
      move-class="item-move"
    >
      <div class="item" :style="item.style" :index="item.index"></div>
    </waterfall-slot>
  </waterfall>
</div>
...
```

这里关键解决我说的问题只需要配置`waterfall`中的这几条属性：


```html
:line="line"
:line-gap="200"
:min-line-gap="180"
:max-line-gap="220"
```
