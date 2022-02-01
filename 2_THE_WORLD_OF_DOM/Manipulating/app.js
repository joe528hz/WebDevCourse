// const allImages = document.getElementsByTagName('img');
// for (let img of allImages) {
//     img.src = 'https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'
// } FOR GETELEMENTSBYTAGNAME

// const square = document.getElementsByClassName('square');
// for (let img of square) {
//     img.src = 'https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'
// } FOR GETELEMENTSBYCLASSNAME

// const paragraph = document.querySelector('p');
// FOR QUERYSELECTOR

// const links = document.querySelectorAll('p a');
// for (let link of links) {
//     console.log(link.href)
// } FOR QUERYSELECTORALL



// ---------------------------------------------------------------------------------------
// const allLinks = document.querySelectorAll('a');
// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!';
// } FOR INNERTEXT

// document.querySelector('h1').innerHTML = '<i>TAE BAHO</a>'
//FOR INNERHTML



// -------------------------------------------------------------------------
// const input = document.querySelector('input[type = "text"]');
// input.type = 'password';
// input.placeholder = 'Enter Password';
// input.getAttribute('type');
// input.setAttribute('type', 'text');
// input.setAttribute('placeholder', 'Enter Username');
// FOR GETATTRIBUTE AND SETATTRIBUTE



// --------------------------------------------------------
// const allLinks = document.querySelectorAll('a');
// for (let link of allLinks) {
//     link.style.color = 'cyan';
//     link.style.textDecorationColor = 'magenta';
//     link.style.textDecorationStyle = 'wavy';
//     link.style.texa
// } FOR CHANGING STYLES



// --------------------------------------------------------
// const h2 = document.querySelector('h2');
// h2.getAttribute('class')
// h2.setAttribute('class', 'purple');
// let currentClass = h2;​
// h2.setAttribute('class', `${currentClass} border`);
// h2.classList;
// h2.classList.add('');
// h2.classList.remove('');
// h2.classList.toggle(''); 
//FOR CLASSLIST



// -------------------------------------------------------
// const firstBold = document.querySelector('b');
// firstBold.parentElement;
// const paragraph = firstBold.parentElement;
// paragraph.childElementCount;
// paragraph.children;
// paragraph.children[0];
// const squareImg = document.querySelector('.square');
// squareImg.nextElementSibling;
// squareImg.previousElementSibling;
// FOR NAVIGATING PARENT, CHILD, and SIBLINGS




// -----------------------------------------------------
// const newImage = document.createElement('img')
// newImage.src = 'https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'
// document.body.appendChild(newImage);
// newImage.classList = 'square';

// const newH3 = document.createElement('h3')
// newH3.innerText = 'I AM NEW H3'
// document.body.appendChild(newH3)

// const p = document.querySelector('p')
// p.append('asdbaskjdhakjsdhakjsdkajsd', 'asdasdasdasdasdasd')

// const newB = document.createElement('b')
// newB.innerText = 'Hello'
// p.prepend(newB)

// const newH2 = document.createElement('H2');
// newH2.append('IM ADJACENT SIBLING')
// const h1 = document.querySelector('h1')
// h1.insertAdjacentElement('afterend', newH2)
// FOR APPEND AND APPENDCHILD AND PREPEND





// -------------------------------------------------------
// const firstChild = document.querySelector('li')
// firstChild.parentElement.removeChild(firstChild)

// const img = document.querySelector('img');
// img.remove();