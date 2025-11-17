import { Router } from 'express';
import internalRoutes from './internalRoutes';

const router = Router();

router.use('/internal', internalRoutes);

export default router;
