var mongoose = require("mongoose");
var Meerkat = mongoose.model("Meerkat");

module.exports = {
    showAll: function(req, res) {
        Meerkat.find({}, function(err, meerkats) {
            console.log(meerkats);
            res.render("index", { meerkats: meerkats });
        });
    },

    create: function(req, res) {
        var meerkat = new Meerkat(req.body);
        meerkat.name = req.body.name;
        meerkat.rank = req.body.rank;
        meerkat.save(function(err) {
            if(err) {
                res.render("index", { errors: meerkat.errors });
            } else {
                res.redirect("/");
            }
        });
    },

    showOne: function(req, res) {
        Meerkat.findOne({ _id: req.params.id }, function(err, meerkat) {
            console.log(meerkat);
            res.render("meerkat", { meerkat: meerkat });
        });
    },

    editPage: function(req, res) {
        Meerkat.findOne({_id: req.params.id }, function(err, meerkat) {
            res.render("editKat", { meerkat: meerkat });
        });
    },

    edit: function(req, res) {
        Meerkat.update({_id: req.params.id }, { $set: { name: req.body.name, rank: req.body.rank }}, function(err) {
            if(err) {
                res.render("editKat", { errors: meerkat.errors });
            } else {
                res.redirect("/");
            }
        });
    },

    delete: function(req, res) {
        Meerkat.remove({_id: req.params.id }, function(err) {
            if(err) {
                res.render("editKat", { errors: meerkat.errors });
            } else {
                res.redirect("/");
            }
        });
    }
}
