import express from 'express';
import {
  getArticlesRoute,
  writeArticlesRoute,
  getBookRoute,
} from './routes';

const router = express.Router();

router.use(express.json());

router.get('/articles', getArticlesRoute);

router.post('/articles', writeArticlesRoute);

router.get('/book', getBookRoute);

export {
  router as spreadsheetRouter,
};
