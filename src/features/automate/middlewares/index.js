import express from 'express';
import {
  automateArticlesRoute,
  automateBookRoute,
} from './routes';

const router = express.Router();

router.use(express.json());

router.post('/articles', automateArticlesRoute);

router.post('/book', automateBookRoute);

export {
  router as automateRouter,
};
