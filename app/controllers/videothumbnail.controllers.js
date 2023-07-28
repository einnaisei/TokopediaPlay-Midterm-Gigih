const db = require("../models");
const { url } = require("../models/index2");
const videothumbnail = db.videothumbnail

exports.create = (req, res) => {
    res.json({message: "It works!"});
}

exports.show = (req, res) => {
    const videoID = req.params.videoID;

    videothumbnail.findByvideoID(url)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({message: err.message}))
}

