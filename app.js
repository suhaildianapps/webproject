const express = require('express')
const path = require('path')
const app = express();
const hbs = require('hbs');


// API methods
// get, put, patch, delete, post

// app.get(route, callback)
const staticPath = __dirname + '/public';

// built-in middleware of express
app.use(express.static(staticPath));

const templatePath = __dirname + '/templates/views';
app.set("views", templatePath);

// to set the view engine
app.set("view engine", "hbs")


const partialsPath = __dirname + '/templates/partials';
hbs.registerPartials(partialsPath);

// template engine route
app.get("", (req, res) => {
    res.render('index', {
        name : "tester"
    })
})


app.get('/', (req, res) => {
    res.send("hello world")
})

app.get("/test", ( req, res ) => {
    res.render("test");
})

app.get("*", (req, res) => {
    res.render("404", {
        errorComment: "Oops page not found"
    });
})

app.listen(3000, () => {
    console.log('server is running')
})