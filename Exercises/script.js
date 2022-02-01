const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const allSpans = document.querySelectorAll('span');
for (let span = 0; span < allSpans.length; span++) {
    allSpans[span].style.color = colors[span];
}




const list = document.querySelector('li');
list.classList;
list.classList.toggle('highlight');

const allList = document.querySelectorAll('li')
for (let li of allList) {
    li.classList.toggle('highlight')
}



