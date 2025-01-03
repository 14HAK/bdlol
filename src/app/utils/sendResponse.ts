import { Response } from 'express';
import { TResponse } from '../globalInterface';

// const response = {statusCode, success, message, data:{...}};
// sendResponse(res, response);
const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  res.status(data?.statusCode as number).json({
    success: data.success,
    message: data.message,
    meta: data.meta,
    data: data.data,
  });
};
export default sendResponse;
