# vue-mobile
一个基于vue的移动程序框架，封装了await异步请求模块，使用方便

# 简单用法
（1）安装依赖 npm install  
（2）运行 npm run dev  
（3）在浏览器输入 http://localhost:8080/#/  
（4）浏览器如果正常输出，运行成功 

# 主要代码说明
│index.html  
│  
├─build   
│      
├─config  
│        
├─src  
│  │　　App.vue  
│  │　　main.js  
│  │          
│  ├─common  
│  │　　　　request.js　（封装通用ｈｔｔｐ请求，基于axios和promist）  
│  │        
│  ├─components  
│  │　　　　HelloWorld.vue  
│  │        
│  ├─router  
│  │　　　　index.js  
│  │      
│  └─services  
│　　　　　　ApiBase.js （对接后端通用基类）  
│　　　　　　LoginService.js　（和后端对接具体逻辑，这里是用登陆做例子）  
│            
└─static  
        
