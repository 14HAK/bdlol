import jwt from 'jsonwebtoken';
import envConfig from '../config';

export const generateRefreshToken = async () => {
  return jwt.sign({ name: 'lovely' }, envConfig.env_refreshTokenSecret as string, {
    expiresIn: '15m',
  });
};
