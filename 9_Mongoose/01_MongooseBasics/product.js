const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(() => {
        console.log("CONNECTION OPEN!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!");
        console.log(err);
    });


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20 //length of the name String
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Price must be positive boboamp"] // minimum price of the product
    },
    onSale: {
        type: Boolean,
        dafault: false,
    },
    categories: [String], //type is an array of Strings
    qty: {
        online: {
            type: Number,
            default: 0
        },
        instore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
})



//FOR MODEL INSTANCE METHODS
// productSchema.methods.greet = function () {
//     console.log("HELLO HI HOWDIE!");
//     console.log(`-from ${this.name}`)
// }
// productSchema.methods.toggleOnsale = function () {
//     this.onSale = !this.onSale;
//     return this.save(); // return cuz using .save always takes time it is thenable for us to wait
// }
// productSchema.methods.addCategories = function (newCat) {
//     this.categories.push(newCat);
//     return this.save();
// }
// const Product = mongoose.model('Product', productSchema);
// async function findProduct() {
//     const foundProduct = await Product.findOne({ name: 'Tire Pump' });//await since it returns a query
//     // foundProduct.greet();
//     console.log(foundProduct);
//     await foundProduct.toggleOnsale();
//     console.log(foundProduct)
//     await foundProduct.addCategories('gliding');
//     console.log(foundProduct);
// }
// findProduct();



//FOR MODEL STATIC METHODS
// productSchema.statics.fireSale = function () {
//     return this.updateMany({}, { onSale: true, price: 0 });
// }
// const Product = mongoose.model('Product', productSchema);
// Product.fireSale().then(res => {
//     console.log(res);
// })







// const Product = mongoose.model('Product', productSchema);
// const bike = new Product({ name: 'Bike Jersy', price: 50.00, categories: ['clycling'], size: 'S' });
// bike.save()
//     .then(data => {
//         console.log("IT WORKED!!!");
//         console.log(data);
//     }).catch(err => {
//         console.log("OHH NO ERROR!");
//         console.log(err);
//     });


//FOR VALIDATING MONGOOSE UPDATE
// Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: -15 }, { new: true, runValidators: true })
//     .then(data => {
//         console.log("IT WORKED!!!");
//         console.log(data);
//     }).catch(err => {
//         console.log("OHH NO ERROR!");
//         console.log(err);
//     });