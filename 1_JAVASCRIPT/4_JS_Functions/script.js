// function singSong() {
//     console.log("DO");
//     console.log("RE");
//     console.log("MI");
//     console.log("FA");
// } BASIC FUNCTION



// function greet(firstName) {
//     console.log(`HI ${firstname}`);
// }
// greet('Florenz'); WITH ARGUMENT


// function greet(firstName, lastName) {
//     console.log(`Hey ${firstName} ${lastName[0]}`)
// }
// greet("Florenz", "Inoc");
// function repeat(str, numberOfTimes) {
//     let result = "";
//     for (let i = 0; i < numberOfTimes; i++) {
//         result += str;
//     }
//     console.log(result);
// }
// repeat("Iyut", 10); MULTIPLE ARGUMENTS



// function add(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         return false;
//     }
//     return x + y;
// }
// add(1, 2); RETURN KEYWORD



// function capitalize(str) {
//     let firstLetter = str.charAt(0).toUpperCase();
//     let newStr = firstLetter.concat(str.toLowerCase().slice(1));
//     return newStr;
// } FOR CAPITALIZATION



// const daysOfWeek = {
//     1: "Monday",
//     2: "Tuesday",
//     3: "Wednesday",
//     4: "Thursday",
//     5: "Friday",
//     6: "Saturday",
//     7: "Sunday"
// }
// function returnDay(num) {
//     if (num < 1 || num > 7) {
//         return null;
//     }
//     for (let input in daysOfWeek) {
//         if (parseInt(input) === num) {
//             return daysOfWeek[input];
//         }
//     }
// } FOR RETURN DAY (parseInt the input cuz its strin in objects)



// const add = function (x, y){
//     return x + y;
// }
// add(1, 2); FOR FUNCTION EXPRESSION



// function callTwice(func) {
//     func();
//     func();
// }
// function callTenTimes(f) {
//     for (let i = 0; i < 10; i++) {
//         f();
//     }
// }
// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
// }
// callTwice(rollDie); FOR HIGHER ORDER FUNCTIONS (FUNCTIONS AS ARGUMENTS)



// function mysteryFunc() {
//     const random = Math.floor(Math.random() * 5) + 1;
//     if (random < 4) {
//         return function () {
//             console.log("Baho kag Tae");
//         }
//     } else {
//         return function () {
//             alert("Humot kag Tae");
//         }
//     }
// }
// const mystery = mysteryFunc();
// function makeBetween(min, max) {
//     return function (num) {
//         return num >= min && num <= max;
//     }
// }
// const isChild = makeBetween(0, 18);
// isChild(40); RETURNING A FUNCTION



// const add = (x, y) => {
//     return x + y;
// }
// add(1, 2);
// const square = (x) => {
//     return x * x;
// }
// square(2);
// const rollDie = () =>{
//     return Math.floor(Math.random() * 6) + 1;
// } FOR ARROW FUNCTIONS



// const add = (x, y) => (x + y);
// add(1, 2);
// const square = (x) => (x * x);
// square(2); FOR IMPLICIT ARROW FUNCTIONS




