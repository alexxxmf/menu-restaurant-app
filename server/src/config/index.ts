interface Config {
  salt: string;
  keyLength: number;
}

export const config: Config = {
  salt: process.env.SALT,
  keyLength: parseInt(process.env.KEY_LEN),
};
