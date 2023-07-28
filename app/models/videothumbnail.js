module.exports = mongoose => {
    const schema = mongoose.Schema (
        {
            videoID: string,
            urlimage: string,
        }, {
            timestamps: true
        }
    );
    return mongoose.model("videothumbnail", schema);
    
}