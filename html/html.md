##一个最基本的html：
```
<!DOCTYPE html>
<html lang="zh-Hans">
<head>
<meta charset="utf-8">
<link rel="stylesheet" href="./style.css">
<title>xxx</title>
</head>
<body>
xxx
<script src="main.js"></script>
</body>
</html>
```

##什么是语义化？

语义化就是搞清楚每一个标签的意思，尽量让html里每一个标签都有它对应的意义。就当做读给一个盲人听似的，告诉读者，这实际代表着某一个东西。一篇文章，必然会有标题，题注，段落。同样的一个网站也会有标题，导航，主要内容，侧栏，页脚。当我们把每一部分都整理清楚，我们也更容易用css去处理，也更有利于其他人去阅读。语义化的好处不仅仅是css调节样式的时候思路可以更加清晰，同时也更有助于搜索引擎优化（SEO）的处理。



一般语义： 标题段落，列表，重点强调

标题段落：一级标题<h1></h1>,    段落<p></p>

列表：无序列表<ul></ul> ，列表内容<li></li> ,  有序列表<ol></ol><li></li>,

  描述列表：  description list              <dl>,

                              description term           <dt></dt> ,

                              description description <dd></dd>

                                                                   </dl> 



引用： 块引用<blockquote cite=""><blockquote>  ，  行内引用<q cite=""></q>

缩略语：<abbr title=""></abbr>

标记联系方式:<address> </address>

上标和下标： 上 <sup></sup>  下<sub></sub>

展示计算机代码：  <code>: 标记计算机通用代码

                              <pre>:标记固定宽度的文本块，其中保留空格

                              <kbd>:键盘输入

                               <samp>:标记输出









空元素：

<meta>      <head>内
<link>      <head>内
<br>        段落
<hr>        段落
<img>       媒体
<source>    媒体
<track>     媒体
<param>     媒体
<embed>     媒体
<col>        表格
<colgroup> when the span is present    表格
<input>     表单
<base> 
<area> 
<command> 
<keygen>
<wbr> 


块级元素：

address 地址

blockquote  引用

dir - 目录列表

dl>dt+dd-定义列表

ul>li-定义无须列表

ol>li-定义有序列表

div常用的块级元素，用于css布局。

（fieldest，legend）-组合表单中的相关元素

form - 交互表单

table - 表格

pre - 格式化文本,，主要用于显示源码



内联元素：

a - 锚点


abbr - 缩写


b - 粗体（不推荐）

strong - 粗体强调

em - 斜体重要{均是双标签}

这些也都可通过font-weight属性来设置。

bdo 定义文本方向

big - 较原来字体大一号。<big><big>12</big></big>

br - 换行<br> <br />clear属性

cite - 引用，斜体显示

code - 计算机代码(在引用源码的时候需要)

dfn - 定义字段

i - 斜体

img - 图片

input - 输入框

kbd - 定义键盘文本

samp - 定义范例计算机代码

var - 定义变量

q - 短引用

small - 小字体文本

span - 常用内联容器，定义文本内区块

label - 表格标签

del-删除部分

ins-新插入部分

select - 项目选择

sub - 下标

sup - 上标

textarea - 多行文本输入框

iframe-创建包含另一个文档的内联框架

(map,area)-带有可点击区域的图像映射