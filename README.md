# 开发报告
##一、本站点的策划思路
###1)为什么做？
>基于对漫威系列的喜爱，做了这样的兴趣性站点，与相同的爱好者分享漫威的一些故事、情节甚至于它的发展和影片分享。使得同好者不必再去各个网站寻找他需要的信息。
###2）期望的效果？
>期望达到的效果是网页简洁，用户操作不复杂，内容全面。
###3）内容来源？
>图片来自百度图片，详细内容来自百度百科，视频来自爱奇艺视频网站。
##二、页面结构与说明
>站点有四个页面构成：一个主页面，一个英雄介绍页面，一个影视介绍页面，一个意见反馈页面。
>主页面负责提供漫威历史发展信息和跳转其他页面的功能；
>英雄页面负责介绍出现在漫威世界最有名的英雄的详细信息；
>影视介绍页面负责通过表格向用户详细地介绍各个时间段漫威的影视作品；
>意见反馈页面负责把用户对本网站的意见信息进行反馈。
>页面的URL地址：
>主页面：https://victreecr.github.io/final_homework/web_final_homework2/index.html
>英雄页面：https://victreecr.github.io/final_homework/hero.html
>影视页面：https://victreecr.github.io/final_homework/movie.html
>反馈页面：https://victreecr.github.io/final_homework/myform.html
##三、技术指标
>兼容IE6,7,8,9,10；使用的HTML版本为4与5，css2和css3；开发工具为sublime，GitHub；
##四、技术点说明
###1）技术难点
####1.主页面设置时壁纸留白问题：
>难点：调节图片大小和div大小均不能解决；
>知识背景：把div的display属性进行改变，
>最终解决方法：
>对壁纸设定两个div，然后改变div的display属性）
```
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
