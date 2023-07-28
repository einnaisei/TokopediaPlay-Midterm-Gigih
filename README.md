# TokopediaPlay-Midterm-Gigih

**Installation**
npm install
npm start

**Routes**
require("./app/routes/filename")(app);
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`server starts on port ${PORT}`));

**Connect to Database**
db.mongoose.connect(db.url, mongooseConfig)
.then(() => console.log("database is connected"))
.catch(error => {
    console.log(`failed to connect ${error.message}`),
    process.exit()
    };
