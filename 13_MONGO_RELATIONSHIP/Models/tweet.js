const mongoose = require('mongoose');
const { Schema } = mongoose; // const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/relationshipDemo')
    .then(() => {
        console.log("MONGOOSE CONNECTION OPEN!!")
    })
    .catch(err => {
        console.log("OH NO MONGOOSE CONNECTION ERROR!!!!");
        console.log(err);
    });

const userSchema = new Schema({
    username: String,
    age: Number
})

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
})

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

// const makeTweet = async () => {
//     // const user = new User({ username: 'chickenfan99', age: 61 });
//     const user = await User.findOne({ username: 'chickenfan99' })
//     // const tweet1 = new Tweet({ text: 'OMG i like my chicken family!', likes: 0 });
//     const tweet2 = new Tweet({ text: 'bock bock bock, My chicken make noises', likes: 123 });
//     // tweet1.user = user;
//     tweet2.user = user;
//     // user.save();
//     // tweet1.save();
//     tweet2.save();
// }

// makeTweet();

const findTweet = async () => {
    const t = await Tweet.findOne({}).populate('user', 'username')
    console.log(t)
}
findTweet();