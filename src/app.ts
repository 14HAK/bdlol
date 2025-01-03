import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';

const app: Application = express();
app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:5173'],
    credentials: true,
  })
);

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  console.log({
    path: req.path,
    method: req.method,
    strick: new Date().toLocaleString(),
  });
  next();
});

app.get('/', (req: Request, res: Response) => {
  res.send({ status: 200, message: 'Hello World!' });
});

app.use('/api/v1', router);
app.use(globalErrorHandler);
app.use(notFound);

export default app;
