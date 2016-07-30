import config from './env';
import jwt from 'express-jwt';

const authenticate = jwt({
  secret: config.jwtSecret
});

export default authenticate;
