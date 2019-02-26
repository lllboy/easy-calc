(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.ec = factory());
}(this, function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var EasyCalc =
  /*#__PURE__*/
  function () {
    function EasyCalc() {
      _classCallCheck(this, EasyCalc);
    }

    _createClass(EasyCalc, [{
      key: "numHandle",
      value: function numHandle(numStr) {
        var numArr, dotIndex, dotLen;
        dotIndex = numStr.indexOf(".");

        if (0 <= dotIndex) {
          //说明有小数点
          numArr = numStr.split("");
        } else {
          numArr = numStr.split("");
        }

        dotLen = numArr.length - (dotIndex + 1); //计算小数点后面一共几位数

        numArr.splice(dotIndex, 1);
        return {
          numArr: numArr,
          dotLen: dotLen
        };
      }
    }, {
      key: "addOrMinus",
      value: function addOrMinus(num1, num2, isAdd) {
        if (isNaN(num1) || isNaN(num2)) {
          throw Error("params is not number");
        }

        var numStr1 = new String(num1);
        var numStr2 = new String(num2);
        var objNum1 = this.numHandle(numStr1);
        var objNum2 = this.numHandle(numStr2);
        var dotDist = objNum1.dotLen - objNum1.dotLen;
        var dotLen;

        if (0 < dotDist) {
          for (var i = 0; i < dotDist; i++) {
            objNum2.numArr.push("0");
          }

          dotLen = objNum1.dotLen;
        } else {
          for (var _i = 0; _i < Math.abs(dotDist); _i++) {
            objNum1.numArr.push("0");
          }

          dotLen = objNum2.dotLen;
        }

        var newInt1 = new Number(objNum1.numArr.join(""));
        var newInt2 = new Number(objNum2.numArr.join(""));
        var retArr = isAdd ? new String(newInt1 + newInt2).split("") : new String(newInt1 - newInt2).split("");
        var dotIdx = retArr.length - dotLen; //找到小数点的位置

        retArr.splice(dotIdx, 0, ".");

        if (0 >= dotIdx) {
          retArr.unshift("0");
        }

        return Number(retArr.join(""));
      }
    }, {
      key: "minus",
      value: function minus(num1, num2) {
        var retNum = this.addOrMinus(num1, num2, false);
        return retNum;
      }
    }, {
      key: "add",
      value: function add(num1, num2) {
        var retNum = this.addOrMinus(num1, num2, true);
        return retNum;
      }
    }]);

    return EasyCalc;
  }();

  var ec = new EasyCalc();

  return ec;

}));
