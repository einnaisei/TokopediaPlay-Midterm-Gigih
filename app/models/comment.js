module.exports = mongoose => {
    const schema = mongoose.Schema (
        {
            username: string,
            comment: string,
        }, {
            timestamps: true
        }
    );
    return mongoose.model("product", schema);
    
}
