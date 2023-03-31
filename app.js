//Lesson 1
// const button = document.querySelector("button")! as HTMLInputElement;
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;
// function add(num1: number, num2: number) {
//     return num1 + num2
// }
// button.addEventListener("click", function () {
//     console.log(add(+input1.value, +input2.value));
// })
// function calc(param1: number, param2: number, callback: (num1: number, num2: number) => number): void {
//     console.log("Result", callback(param1, param2));
// }
// calc(1,1, (num1, num2) => num1 + num2);
// calc(10,5, (num1, num2) => num1 - num2);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Lesson 2
// let num: number
// num = 10.1
// let str: string
// str = "str"
// let bool: boolean
// bool = true
// const person = "person";
// let _person = "max";
// _person = 1 //error
// let arr: any[] = [];
// arr = [1, 'abc']
// let arrNumber: number[] = [];
// arr = [1, 2, 4]
// let arrString: string[] = [];
// arr = ['cba', 'abc']
// let arrObject: { name: string }[];
// arrObject = [{ name: 'Alex' }, { name: "Nic", age: 10 }] //error
// let obj: object; //  === let obj: {};
// obj = { name: "Alex" }
// obj.name //error
// let obj: { name: string };
// obj = { name: "Alex" }
// obj.name
// let db: {
//     id: number,
//     title: string,
//     info?:
//     {
//         date: Date;
//         isNew?: boolean;
//     }
// }
// db = {
//     id: 1,
//     title: "New project",
//     info:
//     {
//         date: new Date(),
//         isNew: true,
//     }
// };
//Any
// let some: any;
// some = "ffdd"
// some = 1
// some = { name: "dfgjfg" }
// some.name;
//Unknow
// let some: unknown;
// some = "ffdd"
// some = 1
// some = { name: "dfgjfg" }
// let str: string
// str = some //error
// if (typeof some === "string") {
//     str = some
// } // type guard
//2.5. Tuple
// let fixed: [string, number];
// fixed = ['str', 1]
// Enum
// enum Toggle [ENABLE, DISABLE];
// const service = [
//     status: Toggle.ENABLE,
// ];
// if (service.status === Toggle.ENABLE) {
//     console.log('It is active')
// }
//Union Type
// let union: number | string;
// union = 10;
// union = "string";
// function combine(param1: string | number, param2: string | number) {
//     // return param1 + param2; //error
//     if (typeof param1 === "string" || typeof param2 === "string") {
//         return param1.toString() + param2.toString()
//     }
//     return param1 + param2
// }
// console.log(combine("str1", "str2"));
//Literal Type
// let active: "start" | "end";
// active = "start";
//tsc -w app.ts // command mode "watch"
// const fruit: string[] = [];
// function workWithArr(arr, value: string, action: 'add' | "delete"){
//     if (action === "add") {
//     arr.push(value)
//     } else {
//         const index = arr.indexOf(value)
//         arr.splice(index, 1)
//     }
//     return arr
// }
// workWithArr(fruit, "banana", "add")
// workWithArr(fruit, "melon", "add")
// workWithArr(fruit, "pear", "add")
// workWithArr(fruit, "Bear", "add")
// workWithArr(fruit, "Bear", "delete")
// console.log(fruit);
//Return Type
// function print(): void {
//     console.log('Some log');
// }
// print()
// function combine(num1:number, num2:number): void {
//     // return num1 + num2 // error
// }
// function combine(num1:number, num2:number): number {
//     return num1 + num2
// }
// function customError(): never {
//    throw new Error("Some error")
// }
// function createServerPerson(name: string) {
//     return eval(`
//     (() => {
//         return {
//             name: "${name}"
//         }
//     })()
//     `)
// }
// function createPerson(name: string): {name: string} {
//     return createServerPerson(name)
// }
// const person = createPerson('Alex')
// console.log(person);
//Function Type
// let foo: (param1: number, param2: string)=>void;
// foo = (param1: number, param2: string) => {
//     console.log('some text');
// };
// function culc(num1: number, num2: number, callback: (arg1: number, arg2: number) => number) {
//     return callback(num1, num2)
// }
// function foo(num1: number, num2: number) {
//     return num1 + num2
// }
// const result = culc(1, 3, foo)
// console.log(result);
// Custom Types
// type PersonType = {
//     readonly name: string,
//     age?: number
//     showName: () => void;
// };
// const person1: PersonType = {
//     name: "Alex",
//     age: 30,
//     showName() {
//         console.log(this.name);
//     }
// }
// // person1.name = "New Name" //error, because readonly
// const person2: PersonType = {
//     name: "Max",
//      showName() {
//         console.log(this.name);
//     }
// }
// person1.showName();
// person2.showName()
//PRACTICE
var age;
age = 50;
var name1;
name1 = 'Max';
var toggle;
toggle = true;
var empty;
empty = null;
var notInitialize;
notInitialize = undefined;
var callback;
callback = function (a) { return 100 + a; };
//////////////////////////////////////////  
var anything;
anything = -20;
anything = 'Text';
anything = {};
/////////////////////////////////////////
var some;
some = 'Text';
var str;
if (typeof some === 'string') {
    str = some;
}
/////////////////////////////////////////////
var person;
person = ['Max', 21];
/////////////////////////////////////////////
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
;
var page = {
    load: Status.READY
};
if (page.load === Status.LOADING) {
    console.log('Завантаження');
}
if (page.load === Status.READY) {
    console.log('Завантажено');
}
////////////////////////////////////////////////
var a;
/////////////////////////////////////////////
var literal;
///////////////////////////////////////////////
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
var page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: '2021-01-01',
        updateAt: '2021-05-01'
    }
};
var page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close'
};
