## PHP实现


下面提供后端php的实现过程以及代码下载。项目结构如下：

```txt
├── conf
│   └── config.php //配置文件
├── index.php      //入口
└── util 
    └── util.php  //工具函数
```

## 实现过程

主要实现思路是前端传递给后端用户输入的关键词/画板id，后端根据数据类型来判断用户的操作类型，如果是关键词搜索那么执行`get_keyword`方法，如果是画板id则执行`get_contents`方法。


### 主要代码

代码上体现如下：

```txt
//判断 param 参数是否为空
if(!empty($param)){
    //判断参数是number还是string
    // number：请求画板
    // string：关键词搜索
    if(is_numeric($param)) {
        $board_id = $param;
        $arr = json_decode($util->get_contents($board_id,$_POST['***']), true);
        $util->getWantData($arr,'board');
    }else {
        // 获取前端需要要展示的数量
        $keyword = urlencode($param);
        $arr = json_decode($util->get_keyword($keyword,$_POST['***']), true);
        $util->getWantData($arr,'keyword');
    }
```

### 关键词搜索

`get_keyword`关键词搜索代码如下：

```txt
/**
 * 请求花瓣 关键词搜索的数据
 * @param $key  搜索关键词
 * @param $num  页数
 * @return Array
 */
function get_keyword($key,$num){
    for ($pageno = 1 ; $pageno <= $this->page_limit; $pageno ++){
        $response = file_get_contents(
            BaseConfig::HuaBanKeyWord
            .$key
            .'&ixsaam0z&page='
            .$pageno
            .'&per_page='
            .$num
            .'&wfl=1', 'r', $this->context_create());
        return $response;
    }
}
```

### 画板id搜索

`get_contents`画板id搜索代码如下：

```txt
/**
 * 请求花瓣 画板数据
 * @param $id  画板id
 * @param $num 页数
 * @return json
 */
function get_contents($id,$num){
    $response = file_get_contents(
        BaseConfig::HuaBanBoards.$id.'/?max=&limit='.$num.'&wfl=1', 'r', $this->context_create()
    );
    return $response;
}
```

### 取出数据

因为关键词检索和画板id检索，花瓣网返回的数据字段不同，所以要进行处理取出我们真正想要的数据。

`getWantData`关键代码：

```txt
/**
 * 获取对应的数据
 * @param $data 需要处理的数据( 画板数据 / 关键词搜索数据)
 * @param $type 根据数据的类型提取对应节点 (画板数据 / 关键词搜索数据)
 */
public function getWantData($data,$type){

    switch ($type){
        // 取出画板的关键数据
        case 'board':
            $this->allData = $data['board']['pins'];
            $this->ReturnStatus('success',$this->allData);

            // 原先的方式，后端直接获取到图片url集合，返回给前端，现在弃用
            // $this->ErgodicData($this->allData);
            break;

        // 取出关键词搜索的关键数据
        case 'keyword':
            $this->allData = $data['pins'];
            $this->ReturnStatus('success',$this->allData);

            // 原先的方式，后端直接获取到图片url集合，返回给前端，现在弃用
            // $this->ErgodicData($this->allData);
            break;

        default:
            $this->ReturnStatus('error','Action does not exist');
            break;
    }
}
```

### 返回数据

```txt
/**
 * 处理数据返回
 * @param $status 数组 Key
 * @param $param 数组 Value
 */
function ReturnStatus($status,$param){
    echo json_encode(array(
        $status => $param
    ));
}
```

好了，关键代码就是以上这些，还有部分代码自己"补全" 吧！