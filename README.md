# 记录

1. 进入项目根目录，使用`pm2 start ecosystem.config.cjs` 部署项目; 使用`pm2 kill` 结束项目部署；
2. 理解约定式开发;
3. 约定路由+动态路由
4. 线上访问地址：http://120.76.247.123:3000/

`Failed to connect to github.com port 443 after 21063 ms: Couldn't connect to server`解决办法(win+R 打开 cmd)

```
git config --global --unset http.proxy
git config --global --unset https.proxy
ipconfig/flushdns
```

# eslint

eslint 失效按照下面的方法重新配置一下
[nuxt3 项目中使用 eslint 和 prettier+commitlint 附常用规则配置](https://blog.csdn.net/qwe502763576/article/details/123867837)

# linux 命令

1. 删除当前目录下的所有文件及目录，并且是直接删除，无需逐一确认命令行为：
   `rm  -rf  要删除的文件名或目录`

2. 删除文件名 test.txt:
   `rm  -rf   test.txt`

3. 删除目录 test，不管该目录下是否有子目录或文件，都直接删除:
   `rm  -rf   test/`

4. linux vim 使用 ctrl+c 进入命令模式

5. pm2 restart [namespace]

6. pm2 ls

7. pm2 kill

# TODO

服务器直接去 github 拉去最新代码
