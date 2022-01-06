// Javascript Array Methods

// (1) For Each Method
// items.forEach((items) => {
//   console.log(items);
// });

// (2) Map Method

// const answer = items.map((items, index) => {
//   return `${items} ${index}`;
// });

// console.log(answer);

// (3) Filter Method

// const answer = items.filter((items) => {
//   return items == "vipul";
// });

// console.log(answer);

// (4) Reduce MEthod

// const values = [1, 2, 3, 4, 5, 65];

// const answer = values.reduce((acc, items) => {
//   return acc + items;
// }, 0);

// console.log(answer);

// (5) Slice Method

// console.log(items.slice(1, 2));

// const answer = items.splice(3, 0);

// console.log(items);
// (6) sort method

// const myData = [
//   {
//     name: "hello",
//   },
//   {
//     name: "demo",
//   },
//   {
//     name: "abc",
//   },
// ];

// console.log(myData.sort());

// const answer = myData.sort((a, b) => {
//   if (a.name > b.name) {
//     return -1;
//   } else {
//     return 1;
//   }
// });

// console.log(answer);

// console.log(items.sort());

// const items = ["john", "vijay", "vikram", "vipul", "gopal", "nilesh"];

// const myNumbers = [1, 23, 4, 5, 6, 74, 4];
// console.log(
//   myNumbers.sort((a, b) => {
//     if (a > b) {
//       return -1;
//     } else {
//       return 1;
//     }
//   })
// );

// (7) Concat Method

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// console.log(arr1.concat(4, arr2));

// (8) fill MEthod

// console.log(arr1.fill(5));

// const arr = [12, 3, 4, 5, 6, 7];

// console.log(arr.includes(3));

// const answer = demo.find((items) => {
//   return items.hobby === "gaming";
// });

// console.log(answer);

// const result = demo.filter((item, index) => {
//   return item.hobby === "travelling";
// });

// console.log(result);

// const result = demo.map((items, index, arr) => {
//   return arr;
// });

// console.log(result);

// const result = demo.reduce((acc, items) => {
//   return acc + items.id;
// }, 1);

// console.log(result);

// const demo = [
//   {
//     id: 1,
//     name: "vijay",
//     hobby: "codding",
//   },
//   {
//     id: 2,
//     name: "vipul",
//     hobby: "gaming",
//   },
//   {
//     id: 3,
//     name: "gopal",
//     hobby: "travelling",
//   },
// ];

// function delay() {
//   setTimeout(() => {
//     console.log("After 3 Second");
//   }, 3000);
//   return Promise;
// }

// delay();

// const fetch = require("node-fetch");

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// console.log("Start");

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1);
//     // reject(1);
//   }, 3000);
// });

// p1.then((data) => {
//   console.log("then 1" + data);
//   return data;
// }).then((data) => console.log("then 2 " + data));

// console.log("End");

// Closures in js
// var a = 25;
// function x() {
//   var a = 10;
//   function y() {
//     var a = 15;
//     console.log(a);
//   }
//   y();
// }

// x();

// let value = function (b) {
//   console.log(b);
// };

// value(function () {
//   return 10 + 25;
// });

// console.log(Math.PI * 2);

// Spread Operator

// let a = 10;
// let b = 20;

// [a, b] = [b, a];

// console.log(a, b);

// let value = [1, 2, 3, 4];

// let svalue = { ...value };

// console.log(svalue);

// Rest  Operator

// Synchronouse Programming Vs Asynchronous Programming in Languages

// Synchronous

// console.log("First");

// for (let i = 0; i < 100; i++) {
//   console.log(i);
// }
// console.log("Last");

// Asynchronous

// console.log("first");
// setTimeout(() => {
//   for (i = 0; i < 100; i++) {
//     console.log(i);
//   }
// }, 3000);
// console.log("last");

// console.log("first");

// const h = setTimeout(() => {
//   console.log("inside Timeout");
// }, 2000);

// for (let i = 0; i < 10; i++) {
//   console.log("...");
// }
// console.log("clearing timeout");
// clearTimeout(h);
// // console.log(h);

// console.log("end");

// Output

// first
// inside timeout
// ...100
// end

// Set Interval

// console.log("Script Start");
// setInterval(() => {
//   console.log(Math.random());
// }, 1000);

// console.log("Script End");


// function changeFirst()
// {
//   const value = document.getElementById("first").value
//   document.getElementById("answer").innerText = value
// }

// Promises Concept

// const items = ["rice", "vegetables", "masalas"]
//  const check = new Promise((resolve,reject)=> {

//   if(items.includes("rice") && items.includes("masalass"))
//   {
//     resolve("Fried Rice Ready")
//   }
//   else
//   {
//     reject("Not available items to make Fried Rice")
//   }

// })

// check.then((myFriedRice)=> {
//   console.log("Lets eat " + myFriedRice);
// });


// const items = [1,2,3,4]

// console.log(items.length);

// items.push(5)

// items.unshift(0)

// items.splice(1)

// console.log(items);

// items.splice(1,1)

// const getitem = items.pop()
// console.log(getitem);
// console.log(items);

// const getItem = items.shift()
// console.log(getItem);
// console.log(items);
// let i = 1;
// do
// {
    
//     console.log(i);
//     i++;
// }while(i != 10)

// for(let i=0;i< items.length;i++)
// {
//     console.log(items[i]);
// }

// let myName = "vijay"

// console.log(myName[2]);

// console.log(myName);

// console.log(myName.length);

// console.log(myName.toLowerCase());
// console.log(myName.toUpperCase());
// console.log(myName.toLocaleUpperCase());


// console.log(myName.indexOf('a'));

// var answer = myName.match('vi')
// console.log(answer);

// let a = myName.replace("vijay","viju")
// console.log(a);
// console.log(myName);

// let ans = myName.search("j")

// console.log(ans);

// const actors = [
//     {
//         actor : "actor 1",
//         salary : 100
//     },
//     {
//         actor : "actor 2",
//         salary : 200
//     },
//     {
//         actor : "actor 3",
//         salary : 300
//     }
// ]

// for(i=0;i<actors.length;i++)
// {
//     console.log(actors[i].actor);
//     console.log(actors[i].salary);
// }

// const answer = actors.filter((items)=> {
//     return items.salary >= 200
// })

// console.log(answer);

// let answer = actors.reduce((acc,items)=> {
//     return acc + items.salary
// })

// console.log(answer);

// const answer = actors.map((items)=> {
//     return `${[items.actor]} ${items.actor} ${items.salary}`
// })

// console.log(answer);

// Dom Manipulation

// console.log(window);

// const answer = document.getElementById("screen")

// const buttons = document.querySelectorAll("button")

// for(items of buttons)
// {
//     items.addEventListener('click', (e) => {
//         value = e.target.innerText
        
//         if(value === "=")
//         {
//             answer.value = eval(answer.value)
//         }
//         answer.value += value
//     })
// }

// "use strict"
// name = "vijay"

// console.log(name);

// name ="vipul"

// console.log(name);


// console.log(3**3);

// Let Keyword

// value = 1;

// function getvalue(value)
// {
//     value = 10;
//     console.log(value);
// }

// getvalue()
// console.log(value);

// Trim Method


// const names = "     vijay koladaa            "
// console.log(names.length);
// const changedname = names.trim()

// console.log(changedname);
// console.log(changedname.length);
// console.log(names.length);

// const names= "VIJAY"

// console.log(names.toUpperCase());
// console.log(names.toLowerCase());

// const names = "vijay"

// console.log(typeof names.split());

// console.log(names.slice(0,4));
// console.log(names.slice(1));

// let no = 1;
// let name = "vijay"
// let age = 10.5
// let isMarried = false
// let hobbies = ["eat","code"]
// let good;
// let mind = null


// console.log(typeof no,typeof name, typeof age,typeof isMarried,typeof hobbies,typeof good,typeof mind);

// Number To String

// let value = 10
// let newValue = value.toString()
// console.log(typeof newValue );
// console.log(typeof value );

// String To Number

// let a = +'ab'

// console.log(a);

// String Concat

// let firstname = +"10"
// let lastname = +"20"

// console.log(firstname + lastname);

// Template String

// let firstname = "vijay"
// let lastname = "koladara"
// let age = 23

// console.log("My First Name is " + firstname + " And My Last Name is : " + lastname + "My Age is : " + age);
// console.log(`My Name is ${firstname} and My Last Name is ${lastname} And My Age is ${age}`);

// const name
// let name = null; 
// console.log(typeof name);
// let check = null

// console.log(check);

// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MIN_VALUE);
// console.log(Number.POSITIVE_INFINITY);
// console.log(Number.NEGATIVE_INFINITY);

// BigInt

// const number = BigInt(122222222222222222222222222222222222222)

// console.log(typeof number);

// const num1 = BigInt(123511111111111515151515151515)
// const num1 = 12
// const num2 = 456

// console.log(num1 + num2);

// Boolean & Comparison Operators



// const num1 = "3"
// const num2 = 3

// console.log(num1 === num2.toString());

// != vs !==

// let num = 10
// let num1 = 2
// while(num1!==num)
// {

//     console.log("i am");
//     num1++
// }

// console.log(while());

// Ternary Operator

// let myName = "vijaysss"
// let age = myName.length == 5 ? 23 : 18

// console.log(age);

// And Or Operator

// let name = "vijay"
// let age = 233

// if(name == "vijay" && age ==23)
// {
//     console.log("YEs I am Vijay");
// }
// else
// {
//     console.log("You Are Not Vijay");
// }

// let name = "viju"
// let age = 23
// if(name == "vijay" || "viju")
// {
//     if(age == 23)
//     {
//         console.log("You Matched Vijay");
//     }
//     else
//     {
//         console.log("Age Not Matched");
//     }
// }
// else
// {
//     console.log("name not matched");
// }

// 
// if else
// const age = 17
// if(age == 18)
// {
//     console.log("You Can Vote.");
// }
// else
// {
//     console.log("You Cannot Vote");
// }

// let no = 5;
// for(let i = 1;i<= 10;i++)
// {
//     ans = no * i
//     console.log(`${no}* ${i} = ${ans}`);

// }
// let i = 1
// do
// {
    
//     ans = no * i
//     console.log(`${no} * ${i} = ${ans}`);
//     i++
// }while(i!=10);

// let  i = window.prompt("Enter Value")

// switch(+i)
// {
//     case(5):
//     console.log("Wow! 5 is Lucky Number");
//     break;

//     case(6):
//     console.log("Bed Bro.. 6 Is Good");
//     break;

//     default :
//     console.log("You Are Loser");
// }

Start Array