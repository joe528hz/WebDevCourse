const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Product = require('./models/product');//require the exports from product.js 

mongoose.connect('mongodb://localhost:27017/farmStand')
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

//FOR INDEX
app.get('/products', async (req, res) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category });
        res.render('products/index.ejs', { products, category });
    } else {
        const products = await Product.find({});
        res.render('products/index.ejs', { products, category: 'All' });
    }
})

//FOR CREATING NEW PRODUCT ROUTE    
app.get('/products/new', (req, res) => {
    res.render('products/new.ejs', { categories })
})
app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    console.log(newProduct);
    res.redirect(`/products/${newProduct._id}`);
})

//FOR SHOWING DETAILS OF PRODUCTS
app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/show.ejs', { product });
})

//FOR UPDATING PRODUCTS
app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit.ejs', { product, categories });
})
app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
    res.redirect(`/products/${product._id}`);
})

//FOR DELETING A PRODUCT
app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!")
})