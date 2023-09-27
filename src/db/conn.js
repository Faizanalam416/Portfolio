const mongoose = require('mongoose');


const uri = 'mongodb+srv://faizan906567:VxT3YlGyCEcikebx@faizanapi.wwmfew1.mongodb.net/FaizanAPI?retryWrites=true&w=majority';

mongoose.connect(uri).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`No connection`);
})