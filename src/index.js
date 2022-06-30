import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";
import path from "path";

const app = express();
const port = 3000;

// log ra cac request tu trinh duyet gui ve
app.use(morgan("combined"));

// public nhung data tĩnh trong folder public
app.use(express.static(path.join(__dirname, "public")));
//
app.use(express.urlencoded({extended: true})); //middleware xu ly gui data tu client len server duoi dang form
app.use(express.json()); // axios, ...

// template engine
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources", "views")); //chi nhan data trong folder view trong resources

// render khi chuyen path
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/news", (req, res) => {
  console.log(req.query) // lay du lieu tren url khi client request len server
  res.render("news");
});
app.get("/search", (req, res) => {
  res.render("search");
});
app.post("/search", (req, res) => {
  console.log(req.body)
  res.send("");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
