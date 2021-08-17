let express = require("express");

let app = express();

app.get("/", (req, res) => {
    res.send("home page bro");
});
app.get("/about", (req, res) => {
    res.send("about page bro");
});
app.listen(7000, () => {
    console.log("someone connect5ed");
});