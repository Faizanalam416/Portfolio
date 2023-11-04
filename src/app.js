require("dotenv").config();
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();

require("./db/conn");
const Contact = require("./models/contacts");
require("express");

const port = process.env.PORT || 8000;

// public static path
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);


// routing
app.get("/", (req, res)=>{
    res.render('index')
})

//create a new contact in our database
app.post("/", async (req, res)=>{
    try {
        const contactList = new Contact({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            subject: req.body.subject,
            message: req.body.message,
        })
        const contacted = await contactList.save();
        res.status(201).render('index');

    } catch (error) {
        res.status(400).send(error);
    }
});

app.get("*", (req, res)=>{
    res.render('404error', {
        errorMsg: 'Opps! Page Not Found'
    })
})

const start = async () => {
    try {
        app.listen(port , () => {
            console.log(`listening to port at ${port}`)
        });
    } catch (error) {
        console.log(error);
    }
}

start();