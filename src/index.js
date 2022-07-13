import express from "express";
import morgan from "morgan";
import path from "path";
import db from "./config/db/index"
import { engine } from "express-handlebars";
import { route } from "./routes/index";

const app = express();
const port = 3000;

// Connect to DB
db.connect()

// log ra cac request tu trinh duyet gui veF
app.use(morgan("combined"));

// public nhung data tĩnh trong folder public
app.use(express.static(path.join(__dirname, "public")));
//
app.use(express.urlencoded({ extended: true })); //middleware xu ly du lieu khi submit form tu client len server
app.use(express.json()); //middleware xu li khi goi api (axios, ...)

// template engine
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources", "views")); //chi nhan data trong folder view trong resources

// routes init
route(app)

//
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
