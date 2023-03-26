# lib-template

实用 tsup 打包 React/TSX 小组件，并在 Vite 提供的 React + TS 环境中进行测试

## 使用

- github 初始化项目，并初始化项目，拉回本地
- degit 克隆本模板
- 替换 package.json 文件信息
- 根据实际项目需求替换/更改文件

```sh
git clone <your_clone_url>

degit yyong008/lib-template
```

## 运行

```sh
pnpm install

# 开发：构建包
pnpm run dev

# 生产：构建包
pnpm run build

# vite 环境
pnpm run dev
```

## 注意

如果有 css 文件一起被打包进入
