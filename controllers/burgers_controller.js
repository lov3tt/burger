const express = require("express");
var router = express.Router();
var burger = require("../models/burger.js")

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbObject = {
            burgers: data
        };
        console.log(hbObject);
        res.render("index", hbObject)
    })
})

router.post("/api/burgers", function(req,res) {
    burger.create(["name", "devoured"], 
    [req.body.name, req.body.devoured],
    function(result) {
        res.json({ id: result.insertId})
    })
})

router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update(
        {
            devoured: req.body.devoured
        },
        condition,
    )
})

module.exports = router;