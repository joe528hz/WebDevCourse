const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/user');
const bcrypt = require('bcrypt');
const session = require('express-session');

mongoose.connect('mongodb://localhost:27017/loginDemo')
    .then(() => {
        console.log("MONGOOSE CONNECTION OPEN!!")
    })
    .catch(err => {
        console.log("OH NO MONGOOSE CONNECTION ERROR!!!!");
        console.log(err);
    });

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'notagoodsecret' }));

const requireLogin = (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect('/login')
    }
    next();
}

//FOR HOME ROUTE
app.get('/', (req, res) => {
    res.send('WELCOME TO HOMEPAGE')
})

//FOR REGISTERING ROUTE
app.get('/register', (req, res) => {
    res.render('register.ejs');
})
app.post('/register', async (req, res) => {
    const { password, username } = req.body;
    // const hash = await bcrypt.hash(password, 12);
    const user = new User({
        username,
        password
        // password: hash
    })
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/');
})

//FOR LOGIN ROUTE
app.get('/login', (req, res) => {
    res.render('login.ejs')
})
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    // const user = await User.findOne({ username });
    // const validPassword = await bcrypt.compare(password, user.password);
    const foundUser = await User.findAndValidate(username, password);
    if (foundUser) {
        req.session.user_id = foundUser._id;
        res.redirect('/secrets');
    } else {
        res.redirect('/login');
    }
})
//FOR LOGOUT ROUTR (POST VERB)
app.post('/logout', (req, res) => {
    req.session.user_id = null;//you can also use req.session.destroy()
    res.redirect('/login');
})

//FOR SECRET HOME ROUTE
app.get('/secrets', requireLogin, (req, res) => {
    res.render('secret.ejs')
})
app.get('/topsecrets', requireLogin, (req, res) => {
    res.send('TOPSECRETS YEYYYYY WELCOME AGENT 77!')
})

app.listen(3000, () => {
    console.log("SERVING YOUR APP")
})