var mongoose = require("mongoose");

var MeerkatSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rank: {type: String, required: true }
});

mongoose.model("Meerkat", MeerkatSchema);
