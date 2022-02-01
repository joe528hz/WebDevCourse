// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log("RESPONSE, WAITING TO PARSE...", res)
//         return res.json()
//     })
//     .then(data => {
//         console.log("DATA PARSED...")
//         console.log(data.ticker.price)
//     })
//     .catch(e => {
//         console.log("OH NO! ERROR!", e)
//     })

// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then((response) => {
//         console.log(response.data.ticker.price)
//     })
//     .catch((error) => {
//         console.log("OH NO! ERROR!", error)
//     })

// async function fetchBitCoinPrice() {
//     try {
//         const response = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//         console.log(response.data.ticker.price);
//     } catch (error) {
//         console.log("OH NO! ERROR!", error)
//     }
// }


const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('li');
    newLI.innerText = jokeText;
    jokes.append(newLI);
}
const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const response = await axios.get('https://icanhazdadjoke.com', config)
        return response.data.joke;
    } catch (error) {
        return `NO JOKE AVAILABLE SORRY :(`;
    }
}
button.addEventListener('click', addNewJoke)





