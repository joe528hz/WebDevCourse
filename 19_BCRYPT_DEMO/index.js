const bcrypt = require('bcrypt');

//FOR SALTING AND HASHING A PASSWORD
// const hashPassword = async (pw) => {
//     const salt = await bcrypt.genSalt(12);
//     const hash = await bcrypt.hash(pw, salt);
//     console.log(salt);
//     console.log(hash);
// }
const hashPassword = async (pw) => {
    const hash = await bcrypt.hash(pw, 12);
    console.log(hash);
}

//FOR COMPARING PASSWORD AND HASHED PASSWORD
const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw);
    if (result) {
        console.log('LOGGED YOU IN! SUCCESS');
    } else {
        console.log('INCORRECT');
    }
}

hashPassword('monkey')
login('monkey', '$2b$12$Rtv508/oe2qTyKnvG.K75upY6RBBFNidnpty0.EicLmdBCl7Dj/KW')
