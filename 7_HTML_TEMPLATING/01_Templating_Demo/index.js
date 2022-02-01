const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');


app.use(express.static(path.join(__dirname, '/public')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render("home.ejs")
})

app.get('/cats', (req, res) => {
    const cats = [ // imagine this is coming from database
        'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'
    ]
    res.render('cats.ejs', { cats })
})

app.get('/r/:subriddet', (req, res) => {//FOR SUBREDDIT TEMPLATE DEMO
    const { subriddet } = req.params;
    const data = redditData[subriddet];
    if (data) {
        console.log(data);
        res.render('subriddet.ejs', { ...data });// instead of just passing the data object just spread the data
    } else {
        res.render('notFound.ejs', { subriddet });
    }

})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    // res.render('random.ejs', { rand: num }); // pwede mag buhat ug key value pair nga object
    res.render('random.ejs', { num });
})

app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080");
})