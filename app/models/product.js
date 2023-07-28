module.exports = mongoose => {
    const schema = mongoose.Schema (
        {
            productID: int,
            linkProduct: string,
            title: string,
            price: int,
        }, {
            timestamps: true
        }
    );
    return mongoose.model("product", schema);
    
}
