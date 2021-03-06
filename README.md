# 开发报告</br>
## 一、本站点的策划思路</br>
### 1)为什么做？</br>
		基于对漫威系列的喜爱，做了这样的兴趣性站点，与相同的爱好者分享漫威的一些故事、情节甚至于它的发展和影片分享。
		使得同好者不必再去各个网站寻找他需要的信息。
### 2）期望的效果？</br>
		期望达到的效果是网页简洁，用户操作不复杂，内容全面。
### 3）内容来源？</br>
		图片来自百度图片，详细内容来自百度百科，视频来自爱奇艺视频网站。
## 二、页面结构与说明</br>
		站点有四个页面构成：一个主页面，一个英雄介绍页面，一个影视介绍页面，一个意见反馈页面。
		主页面负责提供漫威历史发展信息和跳转其他页面的功能；
		英雄页面负责介绍出现在漫威世界最有名的英雄的详细信息；
		影视介绍页面负责通过表格向用户详细地介绍各个时间段漫威的影视作品；
		意见反馈页面负责把用户对本网站的意见信息进行反馈。
		页面的URL地址：
主页面：https://victreecr.github.io/final_homework/web_final_homework2/index.html</br>
英雄页面：https://victreecr.github.io/final_homework/web_final_homework2/hero.html</br>
影视页面：https://victreecr.github.io/final_homework/web_final_homework2/movie.html</br>
反馈页面：https://victreecr.github.io/final_homework/web_final_homework2/myform.html</br>
		

## 三、技术指标</br>
		兼容IE6,7,8,9,10；使用的HTML版本为4与5，css2和css3；开发工具为sublime，GitHub；


## 四、技术点说明</br>
### 1）技术难点</br>
#### 1.主页面设置时壁纸留白问题：</br>
		难点：调节图片大小和div大小均不能解决；
		知识背景：把div的display属性进行改变，
		最终解决方法：</br>
		对壁纸设定两个div，然后改变div的display属性）
```css
		.a{ 
			display:table;
			width:100%;
			height:auto;
			background:#f00
		}
        
		.b{
            
			width:1200px;
			display:inline-block !important;
			display:inline; 
		}
```
#### 2.内容无法再壁纸上移动</br>
		难点：课堂已知知识无法解决
		知识背景：background-attachment的属性
		最终解决方案：</br>
		（查阅background-attachment的属性)
```
body{
        background-image:url("../picture/form.jpg");/*图片地址*/
        background-repeat:no-repeat;/*询问是否重复图片，选择不重复*/
        background-attachment: fixed; /*定义背景图片随滚动轴的移动方式,fixed是固定于浏览器窗口*/     
    }
```
#### 3.视频资料的地址获取 </br>
		难点：无法直接在网站上获取视频地址
		知识背景：巧用网页源代码
		最终解决方案：
		见链接
>：http://blog.csdn.net/u012061196/article/details/49687013 </br>

#### 4.git上部分样式不能显示问题
		难点：因为是应用插件的原因，开始时候没有具体熟悉插件的各个代码。GitHub对一些CSS和JS文件不能显示。
		知识背景：修改hosts和bootstrap文件的引用
		最终解决方案：
>		1.修改hosts文件
>		
>	    hosts文件位置
>		记事本右键，管理员权限打开；
>		在弹出的记事本窗口中，点击  文件 -> 打开  ，并打开目录
>		 C:\Windows\System32\drivers\etc   （这里记下目录，省的以后再去搜）
>		右下角 文本文档*.txt 切换成 所有文件
>		选中hosts文件，单击打开。
>		更新比较频繁的hosts文件资源链接：http://laod.cn/hosts/2015-google-hosts.html
>		github等网站不能加载css、js的处理
>		chrome打开github经常没加载一些css和js文件，F12看Network 
>		会发现2个css和2个js文件404了，目测GFW的杰作。四个未加载问价如下：
>>		https://assets-cdn.github.com/assets/github-ce4c3f5b30639b5488b01748e2c1f8166ed48a0075b9b3987b035ccfc310bf1c.css
>>		https://assets-cdn.github.com/assets/github2-26160771e44f0aef42411069340cd3cbebd42400911cf7e4cfded91e4eeb2e26.css
>>		https://assets-cdn.github.com/assets/frameworks-2c67e846b237d12dc49d9ba38bef688797518db6c4fc7ec256caf871623c69e4.js
>>		https://assets-cdn.github.com/assets/github-615a25a0e4865aa31e362e8d4a6be79331915194ecd0c764fffcd0936da57be2.js
>		解决方法：
>		修改hosts文件，将assets-cdn.github.com 这个cdn网站的ip加入hosts文件内；
>		查找ip可以在chrome中F12的network中，单击要查看的文件项，即可查看；也可以http://ipaddress.com/  在这里搜；
>		当然，FQ比较麻烦的方法就是将 google 的各个ip加入到hosts文件中。
>>		(这个方案的缺陷是你在自己的电脑上可以实现，但是别人看到的样式还是不能显现)
>
>		2.改变bootstrap文件的引用
>>		原来的代码如下：
>>		<link href="http://cdn.bootcss.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
>		现在代码如下：
>>		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
>		(好处是别人也能看到页面正常的样式)

#### 5.git的行命令</br>
		难点：上传文件时出现的错误
		知识背景：git行命令
		最终解决方案：
>		Git常用操作命令：
>		查看远程仓库：
>>		$ git remote -v
>		添加远程仓库：
>>		$ git remote add [name] [url]
>		删除远程仓库：
>>		$ git remote rm [name]
>		修改远程仓库：
>>		$ git remote set-url --push [name] [newUrl]
>		拉取远程仓库：
>>		$ git pull [remoteName] [localBranchName]
>		推送远程仓库：
>>		$ git push [remoteName] [localBranchName]
>		2）分支(branch)操作相关命令
>		Git 常用命令
>		git branch 查看本地所有分支
>		git status 查看当前状态 
>		git commit 提交 
>		git branch -a 查看所有的分支
>		git branch -r 查看本地所有分支
>		git commit -am "init" 提交并且加注释 
>		git push origin master:develop
>		git push origin master:hb-dev 将本地库与服务器上的库进行关联 
>		git checkout --track origin/dev 切换到远程dev分支
>		git add .
>		git clone git://github.com/schacon/grit.git 从服务器上将代码给拉下来
>		git config --list 看所有用户
>		git commit -a 提交当前repos的所有的改变
>		git add [file name] 添加一个文件到git index
>		其他命令行可自行查找
## 五、开发心得</br>
### 1.在开发中，技术逐渐熟练，遇到不会的问题，查找解决方案的速度越来越快，逐渐意识到动手实践和自己解决问题的重要性</br>
### 2.在开发过程中，我都先构思好页面布局，填充主要内容，再添加样式，步骤清晰，条理清楚，使得开发时候不再混乱。</br>
### 3.多寻找不同解决方案，在别人的解决方案里面得到自己想要的方法或者自己受到启发</br>
### 4.多看手册，在不同的标签和属性中，多加实验，可以更加具体清晰地了解标签和属性的使用和效果。</br>
### 5.关于本门课的感想：老师上课实例动手亲自操作，使得学生学习地具体形象；课程顺序分类清楚详细，资料全面详细，激发学生自学性；以作品实例为最后检查内容，更加贴近课程要求，可以从最后的作品反映学生的学习效果；老师针对课堂内容，问题、开发、选择与使用恰当的技术、资源、现代工程工具和信息工具。</br>
### 6.关于该课程的展望：对每一阶段学生的学习进度及时检查，减少学习进度越拖越久的情况。</br>
		

## 六、结合考核要求的关于本作业的内容详细说明</br>
### 1.必须用到的HTML标签（基本用到，根据要求，用到的标签如下）</br>
>		元标记：<title>、<meta>
>		语义类标记 <h1-h2>、<p>、<ul>、<table>
>		媒体类标记 <a>、<img>、<audio>或<video>
>		容器类标记 <div>、<span>、<article>、<footer>、<aside>、<nav>、<section>、<articlce>
>		表单及其控件：<form>、<input>、<textarea>、<select>、<submit>
### 2.必须涉及的CSS知识点（完成）</br>
>		基本排版：各html标记的基本样式设置
>		字体：安全字体（fallback机制）、图标字体icon font
>		横向布局：使用浮动方式实现
>		定位：绝对定位或固定定位
>		背景与边框
>		css特效：2D转换或过渡（在myform.html文件）
>		杂项：text-aglin、display等属性的使用
>		移动WEB优化：media query的应用
### 3.javascript要求(完成)
>		使用jquery插件实现至少一个特效或交互效果（在前三个页面有使用）
>		自行开发JS脚本实现至少一个特效或交互效果（myform.html）
### 4.加分因素（完成）
>		合理的使用了上述未提及的各类前端知识点，如html5和css3新特性、sass等
>		（CSS3：border-radius /box-shadow /text-shadow/CSS过渡/CSS动画（改变颜色）/）
>		(html5:<article>/<asider>/<footer>/<nav>/<section>/<canvas>)
>		浏览器兼容性：IE9+兼容，各浏览器表现一致(实现代码如下)
>		(<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">)
>		可访问性：如对听觉设备、打印设备的优化
>		打印设备在movie.html和print.css中；听觉在index.css的p标签中）