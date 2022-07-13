import winston from "winston";

import { config } from "../config";

const { createLogger, format } = winston;

export const logger = createLogger({
  exitOnError: false,
  format: format.combine(winston.format.errors({ stack: true })),
  transports: [
    new winston.transports.Console({ format: winston.format.json() }),
  ],
  level: config.logLevel,
  silent: config.silenceLogger,
});
