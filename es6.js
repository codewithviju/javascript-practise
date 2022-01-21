// All Ecmascript Function

// (1) Let,Var, Const

// let kyword - > let kyword is Blog Scope Means it can be used Within a Block Scope..
// var - var is used To declare a variable - But Please used only Let keyword
// Const Kyword is used to declare a variable but . its value cannot be changed..

// (2) Arrow Function

// => it is used To declare a function 

// Example : -

// (A) Simple Function
// const printName = () => {
//     console.log("Arrow Function Called..");
// }

// printName()

// (B) Using Arguments
// const printName = (name) => {
//     console.log("Hello" + name);
// }

// printName("vijay")

// (C) You Can Define it inline

// const printName = (name,age) => console.log(name + age);
// printName("vijay",23)

// (3) template Literals

// before es6 we used + , To Print variable

// example : -

// let name = "vijay"
// let age = 23

// console.log(`My Name is: ${name} And My age is : ${age}`);

// (4) Default Parameter

// function printNameAndAge(name,age = 23)
// {
//     console.log(`${name} And ${age}`);
// }

// printNameAndAge("vijay",26)
// (5) Multiline 

// let about = `my name is,
// vijay and ,
// my ,
// age ,
// is,
// 22,
// year`

// console.log(about);

// (6) Destructing 

// (A) Array

// let names= ["vijay","viju"]

// let [firstname,secondName] = names

// console.log(firstname);
// console.log(secondName);

// (B) Objects

// let aboutMe = {
//     name : "vijay",
//     age : 23
// }

// let {name: myName,age} = aboutMe

// console.log(myName);
// console.log(age);

// (7) Enhansed Array Object

// const answer = function printInfo(name,age,hobby)
// {
//     return {
//         name,age,hobby
//     }
// }

// console.log(typeof answer("vijay",23,"coding"));

// (8) Promises

// let age = 23
// let getPromise = new Promise((resolve,reject)=>{
//     if(age === 23)
//     {
//         return resolve("Age Matched")
//     }
    
// }).then((error)=> {
//     console.log(error);
// })

// console.log(getPromise);

// classes in javascript


// class sayName{
//     constructor(name)
//     {
//         this.name = name
//         this.age = 23
//         // console.log(name);
//     }

//     printName()
//     {
//         console.log("Name is"+ this.name + "Age is:" + this.age);
//     }
// }

// class childName extends sayName
// {
//     // printName()
//     // {
//     //     console.log(" i am in child");
//     // }
// }

// let obj = new childName("vijay")

// // console.log(typeof obj);
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.printName());

// Generators in Javascript


// function sayHi()
// {
//     return "hello"
//     return "vijay"
// }

// const answer= sayHi()

// console.log(answer);


function* sayHi()
{
    return  "hello"
}

const answer = sayHi()

console.log(answer);