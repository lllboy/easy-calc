## easy-calc-js
JavaScript小数点精确计算，解决js小数点计算的问题
在js中经常会出现浮点数计算错误的问题，比如 0.1+0.2 != 0.3 等小数相减相加的情况
easy-calc-js就是解决这种情况的的。
## 安装/下载
- 直接下载：[https://github.com/dykily/easy-calc/tree/master/release](https://github.com/dykily/easy-calc/tree/master/release)
- 使用`npm`下载： npm install easy-calc-js
- 使用CDN：[https://unpkg.com/easy-calc-js/release/easy-calc.js](https://unpkg.com/easy-calc-js/release/easy-calc.js)

## 使用
### 提示
目前只有`add` 和 `minus` 两个方法。后续会加入别的计算规则。
### node环境使用方式
```
const ec = require("easy-calc-js");
ec.add(0.1,0.2);
ec.minus(0.5,0.9);
````
### 浏览器使用方式
```
ec.add(0.1,0.2);
ec.minus(0.5,0.9);
```
## 运行 demo

- 下载源码 `git clone git@github.com:dykily/easy-calc.git`
- 进入目录 `cd easy-calc/test`
- 打开 `test.html`