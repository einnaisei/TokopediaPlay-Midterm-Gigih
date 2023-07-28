const db = require("../models/product");
const { url } = require("../models/index2");
const product = db.product

exports.create = (req, res) => {
    res.json({message: "It works!"});
}

exports.show = (req, res) => {
    const productID = req.params.productID;

    product.findBylinkProduct(url)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({message: err.message}))
}

