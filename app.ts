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