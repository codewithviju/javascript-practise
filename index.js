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