# 开发报告</br>
##一、本站点的策划思路</br>
###1)为什么做？</br>
		基于对漫威系列的喜爱，做了这样的兴趣性站点，与相同的爱好者分享漫威的一些故事、情节甚至于它的发展和影片分享。使得同好者不必再去各个网站寻找他需要的信息。</br>
###2）期望的效果？</br>
		期望达到的效果是网页简洁，用户操作不复杂，内容全面。</br>
###3）内容来源？</br>
		图片来自百度图片，详细内容来自百度百科，视频来自爱奇艺视频网站。</br>
##二、页面结构与说明</br>
		站点有四个页面构成：一个主页面，一个英雄介绍页面，一个影视介绍页面，一个意见反馈页面。</br>
		主页面负责提供漫威历史发展信息和跳转其他页面的功能；</br>
		英雄页面负责介绍出现在漫威世界最有名的英雄的详细信息；</br>
		影视介绍页面负责通过表格向用户详细地介绍各个时间段漫威的影视作品；</br>
		意见反馈页面负责把用户对本网站的意见信息进行反馈。</br>
		页面的URL地址：</br>
		主页面：https://victreecr.github.io/final_homework/web_final_homework2/index.html</br>
		英雄页面：https://victreecr.github.io/final_homework/hero.html</br>
		影视页面：https://victreecr.github.io/final_homework/movie.html</br>
		反馈页面：https://victreecr.github.io/final_homework/myform.html</br>
##三、技术指标</br>
		兼容IE6,7,8,9,10；使用的HTML版本为4与5，css2和css3；开发工具为sublime，GitHub；</br>
##四、技术点说明</br>
###1）技术难点</br>
####1.主页面设置时壁纸留白问题：</br>
		难点：调节图片大小和div大小均不能解决；</br>
		知识背景：把div的display属性进行改变，</br>
		最终解决方法：</br>
		对壁纸设定两个div，然后改变div的display属性）</br>
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
####2.内容无法再壁纸上浮动</br>
		难点：课堂已知知识无法解决</br>
		知识背景：background-attachment的属性</br>
		最终解决方案：</br>
		（查阅background-attachment的属性）</br>
```
body{
        background-image:url("../picture/form.jpg");/*图片地址*/
        background-repeat:no-repeat;/*询问是否重复图片，选择不重复*/
        background-attachment: fixed; /*定义背景图片随滚动轴的移动方式,fixed是固定于浏览器窗口*/     
    	}
```
####3.视频资料的地址获取</br>
		难点：无法直接在网站上获取视频地址</br>
		知识背景：巧用网页源代码</br>
		最终解决方案：</br>
		见链接</br>
>：http://blog.csdn.net/u012061196/article/details/49687013</br>
####4.git的行命令</br>
		难点：上传文件时出现的错误
		知识背景：git行命令
		最终解决方案：
>		Git常用操作命令：
>		1) 远程仓库相关命令
>		检出仓库：
>>		$ git clone git://github.com/jquery/jquery.git
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
>		 
>		*如果想把本地的某个分支test提交到远程仓库，并作为远程仓库的master分支，或者作为另外一个名叫test的分支，如下：
>>		$git push origin test:master         // 提交本地test分支作为远程的master分支
>>		$git push origin test:test              // 提交本地test分支作为远程的test分支
>		 
>		2）分支(branch)操作相关命令
>		查看本地分支：
>>		$ git branch
>		查看远程分支：
>>		$ git branch -r
>		创建本地分支：
>>		$ git branch [name] ----注意新分支创建后不会自动切换为当前分支
>		切换分支：
>>		$ git checkout [name]
>		创建新分支并立即切换到新分支：
>>		$ git checkout -b [name]
>		删除分支：
>>		$ git branch -d [name] -----d
>		选项只能删除已经参与了合并的分支，对于未有合并的分支是无法删除的。如果想强制删除一个分支，可以使用-D选项
>		合并分支：
>>		$ git merge [name] ----将名称为[name]的分支与当前分支合并
>		创建远程分支(本地分支push到远程)：
>>		$ git push origin [name]
>		删除远程分支：
>>		$ git push origin :heads/[name] 或 $ gitpush origin :[name] 
>		 
>		*创建空的分支：(执行命令之前记得先提交你当前分支的修改，否则会被强制删干净没得后悔)
>>		$git symbolic-ref HEAD refs/heads/[name]
>>		$rm .git/index
>>		$git clean -fdx
>		 
>		3）版本(tag)操作相关命令
>		查看版本：
>		$ git tag
>		创建版本：$ git tag [name]
>		删除版本：$ git tag -d [name]
>		查看远程版本：$ git tag -r
>		创建远程版本(本地版本push到远程)：$ git push origin [name]
>		删除远程版本：$ git push origin :refs/tags/[name]
>		合并远程仓库的tag到本地：$ git pull origin --tags
>		上传本地tag到远程仓库：$ git push origin --tags
>		创建带注释的tag：$ git tag -a [name] -m 'yourMessage'
>		 
>		4) 子模块(submodule)相关操作命令
>		添加子模块：$ git submodule add [url] [path]
>		   如：$git submodule add git://github.com/soberh/ui-libs.git src/main/webapp/ui-libs
>		初始化子模块：$ git submodule init  ----只在首次检出仓库时运行一次就行
>		更新子模块：$ git submodule update ----每次更新或切换分支后都需要运行一下
>		删除子模块：（分4步走哦）
>		 1) $ git rm --cached [path]
>		 2) 编辑“.gitmodules”文件，将子模块的相关配置节点删除掉
>		 3) 编辑“ .git/config”文件，将子模块的相关配置节点删除掉
>		 4) 手动删除子模块残留的目录
>		 
>		5）忽略一些文件、文件夹不提交
>		在仓库根目录下创建名称为“.gitignore”的文件，写入不需要的文件夹名或文件，每个元素占一行即可，如
>		target
>		bin
>		*.db
>		 
>		=====================
>		Git 常用命令
>		git branch 查看本地所有分支
>		git status 查看当前状态 
>		git commit 提交 
>		git branch -a 查看所有的分支
>		git branch -r 查看本地所有分支
>		git commit -am "init" 提交并且加注释 
>		git remote add origin git@192.168.1.119:ndshow
>		git push origin master 将文件给推到服务器上 
>		git remote show origin 显示远程库origin里的资源 
>		git push origin master:develop
>		git push origin master:hb-dev 将本地库与服务器上的库进行关联 
>		git checkout --track origin/dev 切换到远程dev分支
>		git branch -D master develop 删除本地库develop
>		git checkout -b dev 建立一个新的本地分支dev
>		git merge origin/dev 将分支dev与当前分支进行合并
>		git checkout dev 切换到本地dev分支
>		git remote show 查看远程库
>		git add .
>		git clone git://github.com/schacon/grit.git 从服务器上将代码给拉下来
>		git config --list 看所有用户
>		git ls-files 看已经被提交的
>		git rm [file name] 删除一个文件
>		git commit -a 提交当前repos的所有的改变
>		git add [file name] 添加一个文件到git index
>		git commit -v 当你用－v参数的时候可以看commit的差异
>		git commit -m "This is the message describing the commit" 添加commit信息
>		git commit -a -a是代表add，把所有的change加到git index里然后再commit
>		git commit -a -v 一般提交命令
>		git log 看你commit的日志
>		git diff 查看尚未暂存的更新
>		git rm a.a 移除文件(从暂存区和工作区中删除)
>		git rm --cached a.a 移除文件(只从暂存区中删除)
>		git commit -m "remove" 移除文件(从Git中删除)
>		git rm -f a.a 强行移除修改后文件(从暂存区和工作区中删除)
>		git diff --cached 或 $ git diff --staged 查看尚未提交的更新
>		git stash push 将文件给push到一个临时空间中
>		git stash pop 将文件从临时空间pop下来
>		---------------------------------------------------------
>		git remote add origin git@github.com:username/Hello-World.git
>		git push origin master 将本地项目给提交到服务器中
>		-----------------------------------------------------------
>		git pull 本地与服务器端同步
>		-----------------------------------------------------------------
>		git push (远程仓库名) (分支名) 将本地分支推送到服务器上去。
>		git push origin serverfix:awesomebranch
>		------------------------------------------------------------------
>		git fetch 相当于是从远程获取最新版本到本地，不会自动merge
>		git commit -a -m "log_message" (-a是提交所有改动，-m是加入log信息) 本地修改同步至服务器端 ：
>		git branch branch_0.1 master 从主分支master创建branch_0.1分支
>		git branch -m branch_0.1 branch_1.0 将branch_0.1重命名为branch_1.0
>		git checkout branch_1.0/master 切换到branch_1.0/master分支
>		du -hs
>
>		-----------------------------------------------------------
>		mkdir WebApp
>		cd WebApp
>		git init
>		touch README
>		git add README
>		git commit -m 'first commit'
>		git remote add origin git@github.com:daixu/WebApp.git
>		git push -u origin master
>