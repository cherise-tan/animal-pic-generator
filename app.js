
const express = require("express");
const ejs = require("ejs");
const request = require("request");

const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.render("index", {image: ""});
});

app.post("/cat", function(req, res) {
    request("https://aws.random.cat/meow", {json: true}, (error, response, body) => {
        if (error) {
            return console.log(error);
        }
        var image = JSON.parse(JSON.stringify(body.file));
        res.render("index", {image: image});
    });  
});

app.post("/dog", function(req, res) {
    request("https://random.dog/woof.json", {json: true}, (error, response, body) => {
        if (error) {
            return console.log(error);
        }
        var image = JSON.parse(JSON.stringify(body.url));
        res.render("index", {image: image});
    });  
})

app.post("/fox", function(req, res) {
    request("https://randomfox.ca/floof", {json: true}, (error, response, body) => {
        if (error) {
            return console.log(error);
        }
        var image = JSON.parse(JSON.stringify(body.image));
        res.render("index", {image: image});
    });  
})

app.post("/bird", function(req, res) {
    request("https://shibe.online/api/birds", {json: true}, (error, response, body) => {
        if (error) {
            return console.log(error);
        }
        var image = JSON.parse(JSON.stringify(body));
        res.render("index", {image: image});
    });  
})

app.listen(3000, function() {
    console.log("Server started on port 3000");
})