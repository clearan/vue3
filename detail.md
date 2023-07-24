### 关于一些配置、插件

- 工作区的 setting.json 配置保存等相关规则

```js
 "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": false, // 用上面的保存，关闭这个，不然某些index.vue还是4个空格报错
  "typescript.format.enable": false,
```

- 用户个人配置如果需要保存时格式化，还需要配置一下 formatOnSave 为 true

- 快速生成 vue3 模板代码的插件是 Vue VSCode Snippets，它和 Vue 3 Snippets 都是代码片段的插件，可以点进去看看都有哪些自定义的快捷方式

- 如果看见'@/views/home/index'代码有波浪线提示，则可能因为没有安装 TypeScript Vue Plugin(Volar)插件，好像可以从.vscode/extensions.json 看出来用哪些插件
