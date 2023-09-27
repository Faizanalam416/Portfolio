const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: {
        type : String,
        require : true
    },
    email: {
        type : String,
        require : true
    },
    phone: {
        type : Number ,
        require : true
    },
    subject: {
        type :String,
        require : true
    },
    message: {
        type : String,
        require: true
    }
})

// Create a collections
const Contact = new mongoose.model("Contact", contactSchema);

module.exports = Contact;