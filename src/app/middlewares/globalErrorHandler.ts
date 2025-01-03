import { ErrorRequestHandler, NextFunction } from 'express';
import envConfig from '../config';
import { TERRORSOURCES } from '../globalInterface';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const globalErrorHandler: ErrorRequestHandler = (err, req, res, next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'internal server error';

  const errorSource: TERRORSOURCES[] = [
    {
      path: '',
      message: '',
    },
  ];

  res.status(statusCode).json({
    status: statusCode,
    message: message,
    error: errorSource,
    stack: envConfig.environment === 'development' ? err.stack : '',
  });
};

export default globalErrorHandler;
