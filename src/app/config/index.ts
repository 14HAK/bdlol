import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

const envConfig = {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  environment: process.env.NODE_ENVIRONMENT,
  env_accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
  env_refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
};
export default envConfig;
