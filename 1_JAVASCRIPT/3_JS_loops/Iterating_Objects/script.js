const testScores = {
    joel: 80,
    florenz: 99,
    john: 89,
    elsie: 88,
    archie: 98,
    schwa: 99,
    calvin: 85
}

// for (let person in testScores) {
//     console.log(`${person} got ${testScores[ person]}`)
// }


let total = 0;
for (let score of Object.values(testScores)) {
    total += score;
}
let avg = total / Object.values(testScores).length;
console.log(`The Average is ${avg}`);