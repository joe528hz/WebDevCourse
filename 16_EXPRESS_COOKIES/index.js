const express = require('express');
const app = express();

const cookieParser = require('cookie-parser')
app.use(cookieParser('thisismysecret'));

//FOR ACCESSING THE SENT COOKIE DEMO
app.get('/greet', (req, res) => {
    const { name = 'No-name' } = req.cookies;
    res.send(`Hey there ${name}!`)
})

//FOR SENDING COOKIE DEMO
app.get('/setname', (req, res) => {
    res.cookie('name', 'Joel')
    res.cookie('animal', 'harleyquin shrimp');
    res.send('SENDING COOKIES')
})

//FOR SIGNED COOKIE DEMO
app.get('/signedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true })
    res.send('OK SIGNED YOUR FRUIT COOKIE')
})

//FOR VERIFYING THE SIGNED COOKIES DEMO
app.get('/verifyfruit', (req, res) => {
    console.log(req.signedCookies)
    res.send(req.signedCookies)
})

app.listen(3000, () => {
    console.log('SERVING!!')
})