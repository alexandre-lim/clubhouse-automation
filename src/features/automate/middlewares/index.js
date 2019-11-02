import express from 'express';
import {
  automateArticlesRoute,
} from './routes';

const router = express.Router();

router.use(express.json());

router.post('/articles', automateArticlesRoute);

export {
  router as automateRouter,
};
