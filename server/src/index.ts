import express from "express";
import { mainRouter } from "./routes";
import { json } from "body-parser";

const app = express();
const port = 8080; // default port to listen

app.use(json());
app.use("/api", mainRouter);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`); // no-console
});
