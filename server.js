require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose")
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars')
const path = require('path')

const app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// mongoose.connect(process.env.DB, {useNewUrlparser: true});

// const orderSchema  = {
//   "product": String,
//   "First name": String,
//   "Second name": String,
//   "Phone number": Number,
//   "size": String,
//   "Quantity": Number,
//   "Total amount": { Delivery: Number, order: Number, total: Number}
// }

// const Order = mongoose.model("order", orderSchema)



app.get("/", (req, res ) => {
    res.render("index");
});













app.listen(process.env.PORT ||3000, () =>  console.log("server started")
);
