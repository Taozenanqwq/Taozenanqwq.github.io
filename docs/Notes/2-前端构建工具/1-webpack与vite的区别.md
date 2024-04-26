vite 与 webpack 区别：

- 依赖原生 es module，无需打包，按需编译
- vite 热更新速度比 webpack 更快，vite 热更新只需要针对改动的模块进行编译与重新请求，而 webpack 热更新则需要再修改文件后重新打包整个模块链。
- vite 使用 esbuild 进行预构建（重写路径、包合并与缓存），而 webpack 则使用 node，速度较慢
- vite 内置了一些开箱即用的功能，而 webpack 依赖于 loader 和 plugin，但 webpack 拥有更好的生态环境
