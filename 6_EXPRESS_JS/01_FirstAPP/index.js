const express = require('express');//first needs to be required
const app = express(); //second needs to be executed 
// console.dir(app);
// app.use(() => {
//     console.log("WE GOT A NEW REQUEST!!")
// })

//FOR REQUESTS AND RESPONSE
// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST!!")
//     // console.dir(req); //always return an request object
//     // res.send("HELLO WE GOT YOUR REQUEST THIS IS A RESPONSE!")//sends and generate an HTTP response
//     res.send("<H1>THIS IS MY WEBPAGE!</H1>")//you can put even html tags this method is versatile
// })




//FOR ROUTING BASICS
// /cats => 'meow'
// /dogs => 'woof'
// '/' = root rout
// app.get  
app.get('/', (req, res) => {
    res.send("THIS IS HOMEPAGE!!!!!!!!!!!!")
})

// FOR EXPRESS PATH PARAMETERS
app.get('/r/:subreddit', (req, res) => {//create a pattern
    // console.log(req.params) //returns keu value object
    const { subreddit } = req.params; // destructuring
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
});
//FOR EXPRESS PATH MULTIPLE PARAMETERS
app.get('/r/:subreddit/:postId', (req, res) => {
    // console.log(req.params)
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID:${postId} on the ${subreddit} subreddit</h1>`)
})

//FOR WORKING WITH STRING QUERY
app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send(`<h1>NO RESULTS IF NO SEARCH</h1>`);
    } else {
        res.send(`<h1>RESULTS FORM SEARCH: ${q}</h1>`);
    }
})


app.post('/cats', (req, res) => {
    res.send("POST REQUEST TO /cats!!! THIS IS DIFFERENT THAN GET REQUEST!")// go to postman and chat get to post
})

app.get('/cats', (req, res) => {
    res.send("MEOW!!");
})

app.get('/dogs', (req, res) => {
    res.send("WOOF!!");
})

app.get('*'), (req, res) => {
    res.send("I DONT KNOW THIS PATH!!")
}




//FOR EXPRESS INTRO
app.listen(3000, () => { //third need to be listened
    console.log("LISTENING ON PORT 3000!");
});