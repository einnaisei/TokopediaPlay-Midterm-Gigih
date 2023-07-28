module.exports = app => {
    const videothumbnail = require("../controllers/videothumbnail.controllers")
    const rute = require("express").Router();

    rute.get("/", videothumbnail.findAll);
    rute.get("/:url", videothumbnail.show);

    app.use("/videothumbnail", rute);
}
