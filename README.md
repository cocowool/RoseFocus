## RoseFocus Hexo Theme 

因为本主题的css使用sass语法，使用前需要安装hexo-render-sass。

```sh
$ npm install --save hexo-render-sass
```

安装后修改 hexo 博客配置文件 _config.yml。

在配置文件的最后添加以下内容。
```yml
node_sass:
  includePaths:
    - "node_modules"
  outputStyle: compressed
```

## 目录结构
- layout
- source

## 参考资料
1. [从零开始制作 Hexo 主题](https://www.cnblogs.com/mmzuo-798/p/10451385.html)
2. [与 Hexo 配合使用 Sass 和 Webpack](https://lantian.pub/article/modify-website/sass-webpack-with-hexo.lantian/)

