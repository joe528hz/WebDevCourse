// let random = Math.random();
// if (random < 0.5) {
//     console.log("YOUR NUMBER IS LESS THAN 0.5");
//     console.log(random);
// }

// const dayOfWeek = prompt("Enter a day!").toLowerCase();
// if (dayOfWeek === 'monday') {
//     console.log("UGHHH I HATE MONDAY");
// }
// else if (dayOfWeek === 'saturday') {
//     console.log("YAY I LOVE SATURDAY");
// }
// else if (dayOfWeek === 'friday') {
//     console.log("FRIDAY IS DECENT AFTER WORK");
// }
// else if (dayOfWeek === 'wednesday') {
//     console.log("YAY");
// }
// else if (dayOfWeek === 'thursday') {
//     console.log("WEEKEND IS ON THE CORNER");
// }
// else {
//     console.log("IT'S TUESDAY OR SUNDAY");
// }


// const password = prompt("please enter a new password");
// //password must be 6+ characters
// if (password.length >= 6) {
//     if(password.indexOf(" ")===-1){
//         console.log("Valid Password");
//     }
//     else{
//         console.log("Password must not contain spaces");
//     }
// }
// else {
//     console.log("PASSWORD MUST BE +6 CHARACTERS");
// }
// //password cannot containe space

// const password = prompt("Enter new password");
// if (password.length >= 6 && password.indexOf(" ") === -1) {
//     console.log("Valid Password");
// }
// else {
//     console.log("Invalid Password");
// }


// //0-5 free
// //5-10 $10
// //10-65 $25
// //65+ free
// const age = parseInt(prompt("Enter a number!"));
// if ((age >= 0 && age < 5) || age >= 65) {
//     console.log("FREE");
// } else if (age >= 5 && age < 10) {
//     console.log("$10");
// } else if (age >= 10 && age < 65) {
//     console.log("$20");
// } else {
//     console.log("Invalid Input")
// }

// const firstName = prompt("Enter your name:");
// if (!firstName) {
//     firstName = prompt(" Try Again");
// }
// const age = parseInt(prompt("Enter a number!"));
// if (!(age >= 0 && age < 5 || age >= 65)) {
//     console.log("You are not a baby or senior");
// }


const day = parseInt(prompt("Enter a number"));
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Thursday, Friday, Saturday, Sunday");
}