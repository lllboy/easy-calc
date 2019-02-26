## easy-calc-js
JavaScript小数点精确计算，解决js小数点计算的问题
在js中经常会出现浮点数计算错误的问题，比如 0.1+0.2 != 0.3 等小数相减相加的情况
easy-calc-js就是解决这种情况的的。
## 安装/下载
- npm install easy-calc-js
- https://unpkg.com/easy-calc-js@0.0.1/release/easy-calc.js

## 使用
```
const ec = require("easy-calc-js");
ec.add(0.1,0.2);
ec.minus(0.5,0.9);
````

## 运行 demo

- 下载源码 `git clone git@github.com:dykily/easy-calc.git`
- 进入目录 `cd easy-calc/test`
- 打开 `test.html`