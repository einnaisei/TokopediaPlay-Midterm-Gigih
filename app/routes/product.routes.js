module.exports = app => {
    const product = require("../controllers/product.controller")
    const rute = require("express").Router();

    rute.get("/", product.findAll);
    rute.get("/:url", product.show);

    app.use("/product", rute);
}
