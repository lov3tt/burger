const express = require("express")
const expresshb = require("express-handlebars")


var PORT = process.env.PORT || 8080;
var app = express();

app.use(express.static(__dirname + "public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine("handlebars", expresshb({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
    console.table("Server listening on http://localhost:" + PORT)
})