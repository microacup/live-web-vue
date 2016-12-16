## 各种坑

**1. element ui _vm._h is not a function**

   原因：Vue 2.1.5 将 _h 重命名为 _c，而 Element 目前（v1.0.7）发的版本都是用以前的 compiler 编译的，导致新版 runtime 无法运行 Element。

   >  解决方式：
   >
   >  vue版本暂时跟element一致。暂时锁定为2.1.4
```json
  # 重新安装一下版本
  "vue-template-compiler": "2.1.4"
  "vue-loader": "10.0.0"
  "vue": "2.1.4"
```

参考：[element框架搭建](https://segmentfault.com/a/1190000007787134)

