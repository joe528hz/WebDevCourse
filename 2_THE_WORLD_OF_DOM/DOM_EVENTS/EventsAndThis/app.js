const makeRandomColor = function () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`
}

const buttons = document.querySelectorAll('button');
for (let btn of buttons) {
    btn.addEventListener('click', colorize)
}
// for (let btn of buttons) {
//     btn.addEventListener('click', function () {
//         btn.style.backgroundColor = makeRandomColor();
//         btn.style.color = makeRandomColor();
//     })
// }

const h1s = document.querySelectorAll('h1');
for (let h1 of h1s) {
    h1.addEventListener('click', colorize)
}
// for (let h1 of h1s) {
//     h1.addEventListener('click', function () {
//         h1.style.backgroundColor = makeRandomColor();
//         h1.style.color = makeRandomColor();
//     })
// }

function colorize() {
    this.style.backgroundColor = makeRandomColor();
    this.style.color = makeRandomColor();
}