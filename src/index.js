

 class EasyCalc{
    constructor(){
        
    }
    numHandle(numStr){
        let numArr,dotIndex,dotLen;
        dotIndex = numStr.indexOf(".");
        if(0 <= dotIndex){//说明有小数点
            numArr = numStr.split("");
            
        }else{
            numArr = numStr.split("");
        }
        dotLen = numArr.length - (dotIndex+1);//计算小数点后面一共几位数
        
        numArr.splice(dotIndex,1);
        return {
            numArr,
            dotLen
        }
    }
    addOrMinus(num1, num2, isAdd){
        if(isNaN(num1) || isNaN(num2)){
            throw Error("params is not number");
        }
        let numStr1 = new String(num1);
        let numStr2 = new String(num2);
        let objNum1 = this.numHandle(numStr1);
        let objNum2 = this.numHandle(numStr2);
        let dotDist = objNum1.dotLen - objNum1.dotLen;
        let dotLen;
        if(0 < dotDist){
            for(let i = 0; i < dotDist; i++){
                objNum2.numArr.push("0"); 
            }
            dotLen = objNum1.dotLen;
        }else{
            for(let i = 0; i < Math.abs(dotDist); i++){
                objNum1.numArr.push("0"); 
            }
            dotLen = objNum2.dotLen;
        }
        
        let newInt1 = new Number(objNum1.numArr.join(""));
        let newInt2 = new Number(objNum2.numArr.join(""));
        let retArr = isAdd ? new String(newInt1 + newInt2).split("") : new String(newInt1 - newInt2).split("") ;
        let dotIdx = retArr.length - dotLen;//找到小数点的位置
        retArr.splice(dotIdx,0,".");
        if(0 >= dotIdx){
            retArr.unshift("0");
        }

        return Number(retArr.join(""));
    }
    minus(num1,num2){
        let retNum = this.addOrMinus(num1, num2, false);
        return retNum;
    }
    add(num1,num2){
        let retNum = this.addOrMinus(num1, num2, true);
        return retNum;
    }
}

var ec = new EasyCalc();
export default ec;

