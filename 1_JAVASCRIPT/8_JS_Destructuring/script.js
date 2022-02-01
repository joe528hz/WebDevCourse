// const raceResult = ['Joel', 'John', 'Calvin'];
// const [gold, silver, bronze] = raceResult;
// gold;
// silver;
// bronze;
// const [fastest, ...theRest] = raceResult;
// fastest;
// theRest; DESTRUCTURIN ARRAYS



// const user = {
//     name: 'Joel',
//     age: 29,
//     status: 'single',
//     address: 'Danao'
// }
// const { name, age, address } = user;
// name;
// age;
// const { name: newName, address: newAddress } = user;
// newName;
// newAddress; DESTRUCTURING OBJECTS



// const movies = [
//     {
//         title: 'Gagamboy',
//         score: 99,
//         year: 2002
//     },
//     {
//         title: 'Kabesote',
//         score: 92,
//         year: 2005
//     },
//     {
//         title: 'Panday',
//         score: 89,
//         year: 2022
//     },
//     {
//         title: 'Bakekang',
//         score: 70,
//         year: 2000
//     },
//     {
//         title: 'KalyeSerye',
//         score: 100,
//         year: 2012
//     },
//     {
//         title: 'Babalo',
//         score: 88,
//         year: 2001
//     },
// ]

// const destructuredParam = movies.map(({ title, score, year }) => {
//     return `${title} (${year}) is rated ${score}.`
// });
// const runner = {
//     first: 'Joel',
//     last: 'Malazarte',
//     country: 'RastaNation'
// }
// function fullName({ first, last }) {
//     return `${first} ${last}`;
// }
// fullName(runner); DESTRUCTURING PARAMETERS