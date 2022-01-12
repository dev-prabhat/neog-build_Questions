//1- Try to convert these codes to ES6 syntax

// var aloo = 1;
// if (aloo == 1) {
//     var a = 2;
//     console.log(a);
// }
// console.log(aloo);

// let aloo = 1;
// if (aloo === 1) {
//     let a = 2
//     console.log(a)
// }
// console.log(aloo)

//-----------------------------------------------

// var multiply = function (x, y) {
//     return x * y;
// };

// const multiply = (x, y) => x * y

// console.log(multiply(2, 3))

//------------------------------------------------

// var customer = {
//     name: "Bhaalo"
// };
// var card = {
//     amount: 20,
//     product: "Aaalo",
//     unitprice: 50
// };
// var message = "Hello " + customer.name + " wants to buy " + card.amount + " " + card.product + " for price of " + card.unitprice + " per piece"

// const customer = {
//     name: "Bhaalo"
// }

// const card = {
//     amount: 20,
//     product: "Aaalo",
//     unitprice: 50
// }

// let message = `Hello ${customer.name} wants to buy ${card.amount} ${card.product} for price of ${card.unitprice} per piece`

// console.log(message)

//--------------------------------------------------

// var Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"],
// CEO = Neog[0],
// Mentor = Neog[2];

// let Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"]
// let CEO = Neog[0]
// let Mentor = Neog[2]

// console.log(CEO, Mentor)

//--------------------------------------------------

// var arr = ["MA", "TA", "PA", "CA"];
// var firstName = arr[0]
// var surname = arr[1];
// console.log(firstName);
// console.log(surname);

// const [firstName, surname] = ["MA", "TA", "PA", "CA"]
// console.log(firstName)
// console.log(surname)

//--------------------------------------------------

// var Aaloo = "Tasty";
// var Bhaloo = "Cute";
// var Obj = {
//     Aaloo: Aaloo,
//     Bhaloo: Bhaloo
// };

// const Aaloo = "Tasty"
// const Bhaloo = "Cute"
// const Obj = { Aaloo, Bhaloo }

// console.log(Obj)

//-------------------------------------------------

// var a = 5;
// var b = 10;
// console.log("Fifteen is ".concat(a + b, " and n0t ").concat(2 * a + b, "."));

// const a = 5;
// const b = 10

// console.log(`Fifteen is ${a + b} and n0t ${2 * a + b}.`)

//-------------------------------------------------
// var arithmeticsObj = {
//     sum: function sum(num1, num2) {
//         return num1 + num2;
//     },
//     multiply: function multiply(num1, num2) {
//         return num1 * num2;
//     }
// };

// const arithmeticsObj = {
//     sum: function sum(num1, num2) {
//         return num1 + num2
//     },
//     multiply: function multiply(num1, num2) {
//         return num1 * num2
//     }
// }

//--------------------------------------------------

// var avengers = {
//     operation: "Assemble",
//     members: [
//         {
//             ironMan: "Tony Stark"
//         },
//         {
//             captainAmerica: "Steve Rogers"
//         },
//         {
//             blackWidow: "Natasha Romanoff"
//         }
//     ]
// };
// var operation = avengers.operation,
//     members = avengers.members;

// const avengers = {
//     operation: "Assemble",
//     members: [
//         {
//             ironMan: "Tony Stark"
//         },
//         {
//             captainAmerica: "Steve Rogers"
//         },
//         {
//             blackWidow: "Natasha Romanoff"
//         }
//     ]
// }

// const { operation, members } = {
//     operation: "Assemble",
//     members: [
//         {
//             ironMan: "Tony Stark"
//         },
//         {
//             captainAmerica: "Steve Rogers"
//         },
//         {
//             blackWidow: "Natasha Romanoff"
//         }
//     ]
// }
// console.log(operation, members)

// console.log(arithmeticsObj.multiply(2, 4))

//==========================================================
//2- Convert ES6 to ES5

// const packIt = (...args) => console.log(args)

// packIt(1, 2, 3, 5, 5)

// function packIt(...args) {
//     console.log(args)
// }

// packIt(1, 2, 3, 5, 5)

//==========================================================
//3- Guess the output

// const hello = () => "Hello"
// const welcome = () => "Welcome"
// const [Hello = hello(), Welcome = welcome()] = ["Namaste"]
// console.log(Hello, Welcome)

// Namaste Welcome

//-----------------------------------------------

// const obj = {
//     aloo: 1,
//     bhallo: 2
// }

// const { c: aloo = [2, 3, 4].push(5), aloo } = obj

// console.log(aloo)