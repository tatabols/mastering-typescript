// function l(str: any) {
//   console.log(str)
// }


l('// array')
let arrayNum: number[] = [1, 2, 3]
l(arrayNum)

arrayNum = [4, 5, 6]
l(arrayNum)


l('// for in')
let arrayStr: string[] = ['first', 'second', 'third'];

for (let item in arrayStr) {
  l(`${typeof item} - ${item} - ${arrayStr[item]} `);

}

l('// any type')
let anyArray: any = { id: 1, name: 'char'};
l(anyArray)

anyArray = {id: 2, required: true};
l(anyArray);

l('// enum')
enum DoorState {
  Open,
  Close,
  Ajar
}

l(DoorState.Open)
l(DoorState.Close)
l(DoorState.Ajar)
l('-')
l(DoorState['Open'])
l(DoorState['Close'])
l(DoorState['Ajar'])
l('-')
l(DoorState[0])
l(DoorState[1])
l(DoorState[2])

l('// const enum')
const enum DoorStateConst {
  Open,
  Close,
  Ajar
}

l(DoorStateConst.Open)
l(DoorStateConst.Close)
l(DoorStateConst.Ajar)
l('-')
l(DoorStateConst['Open'])
l(DoorStateConst['Close'])
l(DoorStateConst['Ajar'])

l('// let')
l(value1); //var - can be use before declaration
var value1 = 2;
l(value1);

//l(value1); //let - cannot be use before declaration
let value2 = 2; 
l(value2);

l('// optional and default parameters')
function func1(a: string, b: string, c:string): string {
  return `${a} - ${b} - ${c}`
}
l(func1('aa', 'bb', 'cc'))

function func2(a: string, b: string, c:string = 'x', d?: string): string {
  return `${a} - ${b} - ${c} - ${d}`
}
l(func2('aa', 'bb'))

l('// vanilla js callback')
function callbackFunc(str) {
  l('im inside callbackFunc: ' + str);
}

function callACallback(str, callback) {
  if ((typeof callback) === 'function') {
    callback(str);
  } else {
    l('callback param not a function: ' + str)
  }
}

callACallback('1st call', callbackFunc);
callACallback('2nd call', 'callbackFunc');

l('// function signatues')
function callbackFunc2(str: string) {
  l('im inside callbackFunc2: ' + str);
}

function callbackFunc3(str: number) {
  l('im inside callbackFunc3: ' + str);
}

function callbackFunc4(str: string): string {
  l('im inside callbackFunc4: ' + str);
  return 'callbackFunc4'
}

function callACallback2(str: string, callback: (str: string) => void) {
  callback(str);  
}

callACallback2('1st call', callbackFunc2);
//callACallback2('2nd call', callbackFunc3); //will fail due to invalid func signature
callACallback2('1st call', callbackFunc4);
l(callbackFunc4('x'))

l('// function overload')
function FuncA(a: string): string;
function FuncA(a: number): number;
function FuncA(a: boolean): number;
function FuncA(a: any): any {
  return a 
}

l(FuncA('X'));
l(FuncA(2));
l(FuncA(true));

l('// type alias')
type stringOrBool = string | boolean;

function FuncB(stringOrNum: stringOrBool): stringOrBool {
  let a:stringOrBool =  (`${typeof stringOrNum} - ${stringOrNum}`);
  return a;
}

l(FuncB('this is  string'));
// l(FuncB(100)); //will fail due to invalid param signature
l(FuncB(true));

l('// null / undefined')
let var1;
let var2 = null;
let var3 = '';

l(`${typeof var1} - ${var1}`); 
l(`${typeof var2} - ${var2}`); 
l(`${typeof var3} - ${var3}`); 

//object rest and spread
let obj1 = { id: 1, name: 'char', address: 'ph' };
let obj2 = { address: 'sg', postal: 123456 };
l(obj1)
l(obj2)

let obj3 = { ...obj1, ...obj2 }
l(obj3)
