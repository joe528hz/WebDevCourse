// Making an array:
// const colors = ["red", "orange", "yellow"];

// // Arrays are indexed like strings:
// colors[0]; // "red"

// // They have a length:
// colors.length; //3

// // Important array methods:
// //push(value) - adds value to the END of an array
// //pop() - removes and returns last value in array

// //unshift(val) - adds value to START of an array
// //shift() - removes and returns first element in an array



// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// numbers.forEach(function (el) {
//     if (el % 2 === 0) {
//         console.log(el);
//     }
// });

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Stand By Me',
//         score: 85
//     },
//     {
//         title: 'Parasite',
//         score: 95
//     },
//     {
//         title: 'Alien',
//         score: 90
//     },
// ]
// movies.forEach(function (el) {
//     console.log(`${el.title} - ${el.score}/100`);
// }) FOREACH METHOD


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
numbers.map(function (element) {
    return element * 2;
})
const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

const newMovies = movies.map(function (element) {
    return element;
});