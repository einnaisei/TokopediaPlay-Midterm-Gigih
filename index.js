const express = require("express");
const cors = require("cors");
const db = require("./app/models")
const app = express();
const corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));
app.use(express.json());

// Routes
require("./app/routes/videothumbnail.routes")(app);

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`server starts on port ${PORT}`));

// Database connection

const mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
db.mongoose.connect(db.url, mongooseConfig)
.then(() => console.log("database is connected"))
.catch(error => {
    console.log(`failed to connect ${error.message}`),
    process.exit()
});