interface Config {
  salt: string;
  keyLength: number;
  logLevel: string;
  silenceLogger: boolean;
  jwtSecret: string;
  jwtExpirationTimeInSeconds: number;
}

export const config: Config = {
  salt: process.env.SALT,
  keyLength: parseInt(process.env.KEY_LEN, 10),
  logLevel:
    process.env.NODE === "test" ? "warn" : process.env.APP_LOG_LEVEL ?? "debug",
  silenceLogger: process.env.SILENCE_LOGGER === "true" ? true : false,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpirationTimeInSeconds: process.env.JWT_EXPIRATION_TIME_IN_SECONDS
    ? parseInt(process.env.JWT_EXPIRATION_TIME_IN_SECONDS, 10)
    : 3600,
};
