// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then((response) => {
//         console.log("RESPONSE, WAITING TO PARSE...", response);
//         return response.json()
//     })
//     .then((data) => {
//         console.log("DATA PARSED...");
//         console.log(data.ticker.price);
//     })
//     .catch((error) => {
//         console.log("OH NO! ERROR", error);
//     })


// const fetchBitCoinPrice = async () => {
//     try {
//         const response = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//         const data = await response.json();
//         console.log("DATA PARSED...");
//         console.log(data.ticker.price);
//     } catch (error) {
//         console.log("OH NO! ERROR.", error);
//     }
// }

async function fetchBitCoinPrice() {
    try {
        const response = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
        const data = await response.json(); //this method returns a promise
        console.log("DATA PARSED....");
        console.log(data.ticker.price);
    } catch (error) {
        console.log("SOMETHING WENT WRONG...", error)
    }
}