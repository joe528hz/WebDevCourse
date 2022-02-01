const express = require('express');
const app = express();
const session = require('express-session');

//FOR THE WARNING IN TERMINAL TO BE HIDDEN
const sessionOptions = { secret: 'thisisnotagoodsecret', resave: false, saveUninitialized: false }
app.use(session(sessionOptions));

//FOR THE VIEWCOUNT ROUTE DEMO
app.get('/viewcount', (req, res) => {
    if (req.session.count) {
        req.session.count += 1;
    } else {
        req.session.count = 1;
    }
    res.send(`You have visited this page ${req.session.count} times!`)
})

//FOR THE REGISTER ROUTE DEMO
app.get('/register', (req, res) => {
    const { username = 'Anonymous' } = req.query;
    req.session.username = username;
    res.redirect('/greet');
})

//FOR THE GREET ROUTE DEMO
app.get('/greet', (req, res) => {
    const { username } = req.session;
    res.send(`Hello there ${username}`);
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})