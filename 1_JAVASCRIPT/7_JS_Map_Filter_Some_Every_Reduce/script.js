// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// numbers.forEach(function (el) {
//     if (el % 2 === 0) {
//         console.log(el);
//     }
// }); FOR FOREACH METHOD


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// numbers.map(function (element) {
//     return element * 2;
// })
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
//     }
// ]
// const newMovies = movies.map(function (element) {
//     return element;
// }); FOR MAP METHOD




// const num = [1, 2, 3, 4, 5];
// const odd = num.filter((n) => {
//     return n % 2 == 1;
// });
// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99,
//         year: 1984
//     },
//     {
//         title: 'Stand By Me',
//         score: 85,
//         year: 2012
//     },
//     {
//         title: 'Parasite',
//         score: 95,
//         year: 2021
//     },
//     {
//         title: 'Alien',
//         score: 90,
//         year: 1989
//     }
// ];
// const highRated = movies.filter((movie) => {
//     return movie.score >= 90;
// }).map(movie => movie.title); FOR FILTER METHOD



// const exams = [80, 98, 92, 78, 74, 90, 89, 84, 81, 77];
// exams.every((score) => score >= 75);
// exams.some((score) => score >= 75); FOR EVERY AND SOME METHOD



// const prices = [9.99, 1.50, 19.99, 49.99, 30.50];
// const totalPrice = prices.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// });
// const minimum = prices.reduce((min, currPrice) => {
//     if (currPrice < min) {
//         return currPrice;
//     }
//     return min;
// })
// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99,
//         year: 1984
//     },
//     {
//         title: 'Stand By Me',
//         score: 85,
//         year: 2012
//     },
//     {
//         title: 'Parasite',
//         score: 95,
//         year: 2021
//     },
//     {
//         title: 'Alien',
//         score: 90,
//         year: 1989
//     }
// ];
// const highest = movies.reduce((high, currMovie) => {
//     if (currMovie.score > high.score) {
//         return currMovie;
//     }
//     return high;
// }) FOR REDUCE METHOD
