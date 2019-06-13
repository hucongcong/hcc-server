# hcc-server

可以在任意目录启动一个静态资源服务器，并且自动打开浏览器

## 安装

```bash
npm i hcc-server -g
```

使用yarn
```bash
yarn global add hcc-server
```

## 用法

```bash
hcc-server # 把当前目录作为静态资源目录,启动服务器
hcc-server -p 8080 # -p或者 --port 指定启动的端口，默认8080
```