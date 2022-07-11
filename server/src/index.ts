import express from "express";
import { mainRouter } from "./routes";
import bodyParser from "body-parser";

const app = express();
const port = 8080; // default port to listen

app.use(bodyParser.urlencoded());
app.use("/api", mainRouter);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`); // no-console
});
