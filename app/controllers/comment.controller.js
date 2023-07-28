const db = require("../models/comment");
const { url } = require("../models/index2");
const comment = db.comment

exports.create = (req, res) => {
    res.json({message: "It works!"});
}
