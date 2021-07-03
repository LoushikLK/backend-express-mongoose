const express = require('express');
const app = express();



//mongoose database 

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/employeeData', { useNewUrlParser: true, useUnifiedTopology: true });



const path = require('path');

const bodyParser = require('body-parser');


app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }))


const port = 80;


const employeeSchema = new mongoose.Schema({
    name: String,

    email: String,

    address: String,

    cityname: String,

    pincode: Number,

    file: String,

    about: String,

    language: String,

    codeexperience: Number

});


const employeeData = mongoose.model('employeeData', employeeSchema);


app.post('/', (req, res) => {
    // let myData = new employeeData(req.body)(

    let myData = new employeeData({
        name: req.body.fname + " " + req.body.lname,
        email: req.body.email,
        address: req.body.address,
        cityname: req.body.cityName,
        pincode: req.body.pinCode,
        about: req.body.about,
        language: req.body.language,
        codeexperience: req.body.experienceInYears

    })
    console.log(myData);
    myData.save().then(() => {
        res.json({ msg: "This item has been saved to the database" })
    }).catch(() => {
        res.status(400).json({ msg: "item was not saved to the databse" })
    })
})


// For serving static files
app.use('/static', express.static('static'))


app.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'index.html'))
});
app.get("/form", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'form.html'))
});
app.get("/js/index.js", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '/js/index.js'))
});


//form data submitting

app.post("/form", (req, res) => {
    // console.log(req.body);
    let formData = new employeeData({
        name: req.body.firstname + " " + req.body.lastname,
        email: req.body.email,
        address: req.body.address,
        cityname: req.body.city,
        pincode: req.body.pincode,
        about: req.body.textarea
    })
    formData.save().then(() => {
        console.log(formData)
    })
    res.status(200).sendFile(path.join(__dirname, 'form.html'))
})

app.listen(port, () => {
    console.log("server started at port 80...");
})