import express from 'express';
import authCtrl from '../controllers/auth';

const router = express.Router();

router.route('/token')
  /** POST /api/auth/token Get JWT authentication token */
  .post(authCtrl.authenticate,
    authCtrl.generateToken,
    authCtrl.respondJWT);

export default router;