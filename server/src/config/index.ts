interface Config {
  salt: string;
  keyLength: number;
  logLevel: string;
  silenceLogger: boolean;
}

export const config: Config = {
  salt: process.env.SALT,
  keyLength: parseInt(process.env.KEY_LEN, 10),
  logLevel:
    process.env.NODE === "test" ? "warn" : process.env.APP_LOG_LEVEL ?? "debug",
  silenceLogger: process.env.SILENCE_LOGGER === "true" ? true : false,
};
