import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";
import path from "path";

const app = express();
const port = 3000;

// log ra cac request tu trinh duyet gui ve
app.use(morgan("combined"));

// template engine
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources", "views")); //chi nhan data trong folder view trong resources

// render khi chuyen path
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/news", (req, res) => {
  res.render("news");
});

// public nhung data tĩnh trong folder public
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
