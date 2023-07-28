module.exports = app => {
    const comment = require("../controllers/comment.controller")
    const rute = require("express").Router();

    rute.get("/", comment.findAll);
    rute.get("/:url", comment.show);

    app.use("/comment", rute);
}
