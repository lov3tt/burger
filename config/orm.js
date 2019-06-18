var connection = require("./connection.js")

// selectAll()
// insertOne()
// updateOne()

var orm = {
    all: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result)
        })
    },
    create: function (table, val, cb) {
        connection.query("INSERT INTO " + table + "(burger_name)VALUES ('" + val + "')", function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    update: function (table, condition, cb) {
        connection.query("UPDATE" + table + "SET devoured=true WHERE id=" + condition + ";", function (err, result) {
            if (err) throw err;
            cb(result)
        })
    }
}

module.exports = orm;