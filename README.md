###拿到文件先npm i  
###上传到github   
    *-git add .
    *-git commit -m "更改的信息"
    *-git push
    
 ###创建假地址
    *-npm install -g json-server
    *-npm run mock
    *-package.json加入
    * "mock": "json-server --watch mock/db.json",
    *"mockdev": "npm run mock & npm run dev"
###手机上调试
    *  package.json里的dev里加入 --host + ip
###注意事项
    *在引用插件时要注意导入插件，内部引用的时候要用components。
###