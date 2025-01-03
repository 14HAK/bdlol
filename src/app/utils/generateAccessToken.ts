import jwt from 'jsonwebtoken';
import envConfig from '../config';

export const generateAccessToken = async () => {
  return jwt.sign({ name: 'lovely' }, envConfig.env_accessTokenSecret as string, {
    expiresIn: '15m',
  });
};
