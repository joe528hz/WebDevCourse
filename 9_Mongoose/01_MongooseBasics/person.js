const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(() => {
        console.log("CONNECTION OPEN!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!");
        console.log(err);
    });
const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

//FOR VIRTUAL METHOD
// personSchema.virtual('fullName')
//     .get(function () {
//         return `${this.first} ${this.last}`;
//     }).set(function (newName) {
//         this.name.first = newName.substr(0, newName.indexOf(' '));
//         this.name.last = newName.substr(newName.indexOf(' ') + 1);
//     })
// personSchema.virtual('fullName').get(function () {
//     return `${this.first} ${this.last}`
// })


//FOR MOONGOOSE MIDDLEWARE
personSchema.pre('save', async function () {
    //await doStuff(); just an example
    this.first = 'YO';
    this.last = 'MAMA';
    console.log("ABOUT TO SAVE");
});
personSchema.post('save', async function () {
    //await doStuff(); just an example
    console.log("JUST SAVED!!!");
})

const Person = mongoose.model('Person', personSchema);

// const tammy = new Person({ first: 'Amelita', last: 'Malazarte' })
// tammy.save()
//     .then(data => {
//         console.log("Person Added");
//         console.log(data);
//     }).catch(err => {
//         console.log("Opps Error!!!")
//         console.log(err);
//     })

// console.log(tammy.fullname);