import express from 'express';
import {
  getArticlesRoute,
  writeArticlesRoute,
} from './routes';

const router = express.Router();

router.use(express.json());

router.get('/articles', getArticlesRoute);

router.post('/articles', writeArticlesRoute);

export {
  router as spreadsheetRouter,
};
