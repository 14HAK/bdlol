import { NextFunction, Request, Response } from 'express';
import AppError from '../../errors/AppError';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { getService } from './demo.services';

export const getData = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const users = await getService();

    if (!users) return next(new AppError(404, 'Data not found'));

    const response = {
      statusCode: 200,
      success: true,
      message: 'data found',
      data: users,
    };

    sendResponse(res, response);
  }
);
