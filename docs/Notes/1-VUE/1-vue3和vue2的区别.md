Vue3 和 Vue2 的区别有哪些？

- 响应式原理的实现方式不同，Vue3 使用 proxy+reflect 实现 reactive 的响应式原理，使用 defineProperty 实现 ref 的响应式；Vue2 使用 defineProperty 实现响应式原理
  - 可以实现对数组的代理，无需额外重写数组方法
  - 解决了 defineProperty 方法在增加和删除属性无法触发响应式的问题
  - 在初始化时无需遍历对象拦截每一个属性，直接代理整个对象因此性能更好
  - 使用 proxy 在兼容性上差一些
- 使用组合式 api，利用函数式编程方式，方便按需引入，更好配合 tree-shaking 减小包体积
- 增加静态节点标记，对静态节点不再进行 diff 比对提升性能
- v-model
- 不再推荐使用 mixin，推荐使用 hook 进行逻辑复用
- 更好地支持 ts，开发者能够得到更好的类型支持
- 兼容性较差
