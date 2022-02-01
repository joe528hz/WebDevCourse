const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Product = require('./models/product');//require the exports from product.js 
const AppError = require('./AppError');

mongoose.connect('mongodb://localhost:27017/farmStand2')
    .then(() => {
        console.log("MONGOOSE CONNECTION OPEN!!")
    })
    .catch(err => {
        console.log("OH NO MONGOOSE CONNECTION ERROR!!!!");
        console.log(err);
    });


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'))

app.use(express.urlencoded({ extended: true }));// for form urlencoded data and for req.body
app.use(methodOverride('_method'));//middleware

const categories = ['fruit', 'vegetable', 'dairy'];

//FOR DEFINING AN ASYNC UTILITY
function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(e => next(e));
    }
}

//FOR INDEX
app.get('/products', wrapAsync(async (req, res, next) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category });
        res.render('products/index.ejs', { products, category });
    } else {
        const products = await Product.find({});
        res.render('products/index.ejs', { products, category: 'All' });
    }
}))

//FOR CREATING NEW PRODUCT ROUTE    
app.get('/products/new', (req, res) => {
    res.render('products/new.ejs', { categories })
})
app.post('/products', wrapAsync(async (req, res, next) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    console.log(newProduct);
    res.redirect(`/products/${newProduct._id}`);
}))

//FOR SHOWING DETAILS OF PRODUCTS
app.get('/products/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        throw new AppError('Product Not Found!', 404);
    }
    res.render('products/show.ejs', { product });
}))

//FOR UPDATING PRODUCTS
app.get('/products/:id/edit', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        throw new AppError('Product Not Found!', 404);
    }
    res.render('products/edit.ejs', { product, categories });
}))
app.put('/products/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
    res.redirect(`/products/${product._id}`);
}))

//FOR DELETING A PRODUCT
app.delete('/products/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
}))

//FOR ERROR HANDLE VALIDATION
const handleValidationErr = err => {
    console.dir(err);
    return new AppError(`Validation Failed...${err.message}`, 400);
}

//FOR LOGGING THE ERROR IN TERMINAL
app.use((err, req, res, next) => {
    console.log(err.name);
    if (err.name === 'ValidationError') err = handleValidationErr(err)
    next(err);
})

//FOR CUSTOM ERROR HANDLER
app.use((err, req, res, next) => {
    const { status = 500, message = 'Something Went Wrong' } = err
    res.status(status).send(message);
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!")
})