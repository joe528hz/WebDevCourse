const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');// for unique userID 
const methodOverride = require('method-override'); // for overriding the http verb 


app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));// for form urlencoded data and for req.body
app.use(express.json());// for JSON data
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

let comments = [ //assuming these are the comments from the database;
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go watching with my dog'
    },
    {
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Please delete your account Todd'
    },
    {
        id: uuid(),
        username: 'onlysaywoof',
        comment: 'woof woof woof'
    },
]

//FOR INDEX
app.get('/comments', (req, res) => {
    res.render('comments/index.ejs', { comments });
})
//FOR NEW COMMENT RENDERING TEMPLATE NEW VERB-GET
app.get('/comments/new', (req, res) => {
    res.render('comments/new.ejs');
})
//FOR CREATING NEW COMMENT VERB-POST
app.post('/comments', (req, res) => {
    //console.log(req.body)
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() });// for now just push it in our fake database which is the comments array 
    res.redirect('/comments');
});
//FOR SHOWING DETAILS REDERING TEMPLATE SHOW VERB-GET
app.get('/comments/:id', (req, res) => {
    const { id } = req.params; //the destructured id from req.params is set to string
    const comment = comments.find(c => c.id === id);
    res.render('comments/show.ejs', { comment }) //pass the comment object to the template
})
//FOR UPDATING COMMENTS RENDERING EDIT TEMPLATE VERB-GET
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit.ejs', { comment });//pass the comment object to the template
})
//FOR UPDATING COMMENTS VERB-PATCH AND USING METHOD-OVERRIDE
app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newComment = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newComment;
    res.redirect('/comments');
})
//FOR DELETING COMMENT VERB-DELETE AND USING METHO-OVERRIDE
app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
})

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body; //use req.body to get data (you can console log the body for it to be seen in the terminal or you can use postman)
    res.send(`OK heres your ${qty} ${meat} tacos`)
})

app.listen(3000, () => {
    console.log("ON PORT 3000!")
})