require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI;

mongoose.connect(uri).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`No connection`);
})