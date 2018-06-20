// function l(str: any) {
//   console.log(str)
// }
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
l('// array');
var arrayNum = [1, 2, 3];
l(arrayNum);
arrayNum = [4, 5, 6];
l(arrayNum);
l('// for in');
var arrayStr = ['first', 'second', 'third'];
for (var item in arrayStr) {
    l(typeof item + " - " + item + " - " + arrayStr[item] + " ");
}
l('// any type');
var anyArray = { id: 1, name: 'char' };
l(anyArray);
anyArray = { id: 2, required: true };
l(anyArray);
l('// enum');
var DoorState;
(function (DoorState) {
    DoorState[DoorState["Open"] = 0] = "Open";
    DoorState[DoorState["Close"] = 1] = "Close";
    DoorState[DoorState["Ajar"] = 2] = "Ajar";
})(DoorState || (DoorState = {}));
l(DoorState.Open);
l(DoorState.Close);
l(DoorState.Ajar);
l('-');
l(DoorState['Open']);
l(DoorState['Close']);
l(DoorState['Ajar']);
l('-');
l(DoorState[0]);
l(DoorState[1]);
l(DoorState[2]);
l('// const enum');
l(0 /* Open */);
l(1 /* Close */);
l(2 /* Ajar */);
l('-');
l(0 /* 'Open' */);
l(1 /* 'Close' */);
l(2 /* 'Ajar' */);
l('// let');
l(value1); //var - can be use before declaration
var value1 = 2;
l(value1);
//l(value1); //let - cannot be use before declaration
var value2 = 2;
l(value2);
l('// optional and default parameters');
function func1(a, b, c) {
    return a + " - " + b + " - " + c;
}
l(func1('aa', 'bb', 'cc'));
function func2(a, b, c, d) {
    if (c === void 0) { c = 'x'; }
    return a + " - " + b + " - " + c + " - " + d;
}
l(func2('aa', 'bb'));
l('// vanilla js callback');
function callbackFunc(str) {
    l('im inside callbackFunc: ' + str);
}
function callACallback(str, callback) {
    if ((typeof callback) === 'function') {
        callback(str);
    }
    else {
        l('callback param not a function: ' + str);
    }
}
callACallback('1st call', callbackFunc);
callACallback('2nd call', 'callbackFunc');
l('// function signatues');
function callbackFunc2(str) {
    l('im inside callbackFunc2: ' + str);
}
function callbackFunc3(str) {
    l('im inside callbackFunc3: ' + str);
}
function callbackFunc4(str) {
    l('im inside callbackFunc4: ' + str);
    return 'callbackFunc4';
}
function callACallback2(str, callback) {
    callback(str);
}
callACallback2('1st call', callbackFunc2);
//callACallback2('2nd call', callbackFunc3); //will fail due to invalid func signature
callACallback2('1st call', callbackFunc4);
l(callbackFunc4('x'));
l('// function overload');
function FuncA(a) {
    return a;
}
l(FuncA('X'));
l(FuncA(2));
l(FuncA(true));
l('// type alias');
function FuncB(stringOrNum) {
    var a = (typeof stringOrNum + " - " + stringOrNum);
    return a;
}
l(FuncB('this is  string'));
// l(FuncB(100)); //will fail due to invalid param signature
l(FuncB(true));
l('// null / undefined');
var var1;
var var2 = null;
var var3 = '';
l(typeof var1 + " - " + var1);
l(typeof var2 + " - " + var2);
l(typeof var3 + " - " + var3);
//object rest and spread
var obj1 = { id: 1, name: 'char', address: 'ph' };
var obj2 = { address: 'sg', postal: 123456 };
l(obj1);
l(obj2);
var obj3 = __assign({}, obj1, obj2);
l(obj3);
//# sourceMappingURL=type-var-func.js.map