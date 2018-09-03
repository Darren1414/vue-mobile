# vue-mobile
一个基于vue的移动程序框架，封装了await异步请求模块，使用方便

# 简单用法
（1）安装依赖 npm install  
（2）运行 npm run dev  
（3）在浏览器输入 http://localhost:8080/#/  
（4）浏览器如果正常输出，运行成功 

# 代码说明
│  index.html  
│  
├─build  
│      build.js  
│      check-versions.js  
│      logo.png  
│      utils.js  
│      vue-loader.conf.js  
│      webpack.base.conf.js  
│      webpack.dev.conf.js  
│      webpack.prod.conf.js  
│      
├─config  
│      dev.env.js  
│      index.js  
│      prod.env.js  
│        
├─src  
│  │  App.vue  
│  │  main.js  
│  │    
│  ├─assets  
│  │  │  logo.png  
│  │  │    
│  │  └─css  
│  │          my-mint.scss  
│  │          
│  ├─common  
│  │      request.js  
│  │        
│  ├─components  
│  │      HelloWorld.vue  
│  │        
│  ├─router  
│  │      index.js  
│  │      
│  └─services  
│          ApiBase.js  
│          LoginService.js  
│            
└─static  
        .gitkeep  
        
