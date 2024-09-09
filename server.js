const express = require("express");
const port = 3001;
const app = express();
const handlebars = require("express-handlebars");
const path = require("path");

const route = require("./routes");

app.engine("hbs", handlebars.engine({
    extname: ".hbs"
}))

app.set("view engine", "hbs")
app.set("views", "./views")
app.use(express.static(path.join(__dirname, "./public")));

route(app)

app.listen(port, () => {
    console.log(`Server started on port http://localhost:${port}`);
})