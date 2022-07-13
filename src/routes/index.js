import newsRouter from "./news";
import siteRouter from "./site"

export const route = (app) => {
    
  app.use("/news", newsRouter);

  app.use("/", siteRouter)

//   app.post("/search", (req, res) => {
//     console.log(req.body);
//     res.send("search 2222");
//   });
};
