import express from "express";
import cors from "cors";
import { json } from "body-parser";
import expressWinston from "express-winston";

import { mainRouter } from "./routes";
import { logger } from "./utils";

const app = express();
const port = 8080; // default port to listen

app.use(cors());

app.use(json());

app.use(expressWinston.logger({ winstonInstance: logger }));

app.use("/api", mainRouter);

app.use(expressWinston.errorLogger({ winstonInstance: logger }));

// TODO: Add some error-handling middleware here

app.listen(port, () => {
  logger.info(`server started at http://localhost:${port}:`);
});
