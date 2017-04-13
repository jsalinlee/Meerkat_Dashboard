var mongoose = require("mongoose");
var meerkats = require("./../controllers/meerkats.js");

module.exports = function(app) {
    app.get("/", function(req, res) {
        meerkats.showAll(req, res);
    });

    app.get("/meerkats/new", function(req, res) {
        res.render("meerkats");
    });

    app.post("/meerkats", function(req, res) {
        meerkats.create(req, res);
    });

    app.get("/meerkats/:id", function(req, res) {
        meerkats.showOne(req, res);
    });

    app.get("/meerkats/edit/:id", function(req, res) {
        meerkats.editPage(req, res);
    });

    app.post("/meerkats/:id", function(req, res) {
        meerkats.edit(req, res);
    });

    app.post("/meerkats/destroy/:id", function(req, res) {
        meerkats.delete(req, res);
    });
}
