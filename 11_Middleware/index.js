const express = require('express');
const app = express();
const morgan = require('morgan');
const AppError = require('./AppError');


//FOR MORGAN PACKAGE
app.use(morgan('tiny'))

//FOR MY OWN MIDDLEWARE
// app.use((req, res, next) => {
//     console.log('THIS IS MY FIRST MIDDLEWARE!!!')
//     next();
//     console.log('THIS IS MY FIRST MIDDLEWARE -- AFTER CALLING NEXT ()')
// })
// app.use((req, res, next) => {
//     console.log('THIS IS MY SECOND MIDDLEWARE!!!')
//     next();
// })
// app.use((req, res, next) => {
//     console.log('THIS IS MY THIRD MIDDLEWARE!!!')
//     next();
// })

//FOR MIDDLEWARE MORE PRACTICE
app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path)
    next();
})

//FOR MIDDLEWARE THAT ONLY RUNS ON SPECIFIC ROUTES
app.use('/dogs', (req, res, next) => {
    console.log('I LOVE DOGS!!')
    next();
})

//FOR PASSWORD MIDDLEWARE DEMO(NOT REAL AUTH)
// app.use((req, res, next) => {
//     const { password } = req.query;
//     if (password === 'chickennugget') {
//         next();
//     }
//     res.send('YOU NEED A PASSWORD!!!')
// })

//FOR PROTECTING SPECIFIC ROUTE AppError is passed to the Error Handler Middleware
const verifyPassword = ((req, res, next) => {
    const { password } = req.query;
    if (password === 'chickennugget') {
        next();
    }
    throw new AppError('Password Required', 401);
    // res.send('SORRY YOU NEED A PASSWORD!!!')
    // res.status(401); // for unauthorized status code
    // throw new AppError(401,'Password Required');
})

app.get('/', (req, res) => {
    console.log(`REQUEST TIME: ${req.requestTime}`)
    res.send('HOME PAGE!');
})

app.get('/error', (req, res) => {
    chicken.fly();
})

app.get('/dogs', (req, res) => {
    console.log(`REQUEST TIME: ${req.requestTime}`)
    res.send('WOOF WOOF!');
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('ABOUT MY SECRET: i wear headphones on public so that I can avoid conversations')
})

//FOR 403 StatusCode AppError is passed to the Error Handler Middleware
app.get('/admin', (req, res) => {
    throw new AppError('You Are Not An Admin', 403)
})
//FOR 404 STATUS NOT FOUND
app.use((req, res) => {
    res.status(404).send('NOT FOUND')
})

//FOR DEFINING CUSTOM ERROR HANDLER
// app.use((err, req, res, next) => {
//     console.log('******************************************')
//     console.log('******************ERROR*******************')
//     console.log('******************************************')
//     console.log(err);
//     next(err)
// })

//FOR OUR CUSTOM ERROR CLASS
app.use((err, req, res, next) => {
    const { status = 500, message = 'Something Went Wrong' } = err
    res.status(status).send(message);
})

app.listen(3000, () => {
    console.log('App is running on localhost:3000')
})