// let i = 1;
// while (i <= 10) {
//     console.log(i + "Tae");
//     i++;
// }

// const SECRET = "BabyHippo";
// let guess = prompt("Enter the Secret Code!");
// while (guess !== SECRET) {
//     guess = prompt("Secret Code is Incorrect");
// }
// console.log("Congrats you got the secret!")

// let input = prompt("Hey Say Something To ME!")
// while (true) {
//     input = prompt(input);
//     if (input.toLocaleLowerCase() === "stop it") break;
// }

// console.log("CONGRATS YOU WIN");


let maximum = parseInt(prompt("Enter the maximum number"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number"));
}

const targetNumber = Math.floor(Math.random() * maximum + 1);
console.log(targetNumber);
let guess = parseInt(prompt("Enter your guess number"));
let count = 1;
while (parseInt(guess) !== targetNumber) {
    if (guess === 'q') break;
    if (guess > targetNumber) {
        guess = prompt("You guess higher than the targetNumber! Guess again...")
    } else {
        guess = prompt("You guess lower than the targetNumber! Guess again...")
    }
    count++;
}
if (guess === 'q') {
    console.log("OK, YOU QUIT");
} else {
    console.log("It took you " + count + " guesses")
}