import { franc, francAll } from 'franc'
const langs = require('langs');
const colors = require('colors');
const input = process.argv[2];
const langCode = franc(input);

if (langCode === 'und') {
    console.log("SORRY CANNOT DETERMINE THE LANGUAGE TRY TO USE MORE WORDS".red);
} else {
    const language = langs.where("3", langCode);
    console.log(`Our Best Guess is: ${language.name}`.green);
}




