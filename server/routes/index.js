import express from 'express';
import userRoutes from './users';
import taskRoutes from './tasks';
import authRoutes from './auth';

const router = express.Router();	// eslint-disable-line new-cap

/** GET /api-status - Check service status **/
router.get('/api-status', (req, res) =>
  res.json({
    status: "ok"
  })
);

router.use('/users', userRoutes);
router.use('/tasks', taskRoutes);
router.use('/auth', authRoutes);

export default router;
