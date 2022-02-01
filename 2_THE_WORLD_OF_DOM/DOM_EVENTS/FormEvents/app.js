

const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
});
const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.innerText = username;
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`)
    tweetsContainer.append(newTweet);
}



const groceryForm = document.querySelector('#groceryForm');
const groceryList = document.querySelector('#groceryList');

groceryForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const groceryProduct = groceryForm.elements.product;
    const groceryQty = groceryForm.elements.qty;
    addGrocery(groceryProduct.value, groceryQty.value);
    groceryProduct.value = "";
    groceryQty.value = "";
});

function addGrocery(prod, qty) {
    const newLI = document.createElement('li');
    newLI.innerText = `${qty} ${prod}`;
    groceryList.appendChild(newLI);
}
