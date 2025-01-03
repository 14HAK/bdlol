import express, { Router } from 'express';
import { getData } from './demo.controller';

const demoRouter: Router = express.Router();
demoRouter.route('/demos').post().get(getData);
export default demoRouter;
