import { Router } from 'express';
import demoRouter from '../module/demo/demo.routes';

const router = Router();
const moduleRoutes = [
  {
    path: '/demos',
    route: demoRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
