import express from 'express';
import {
  getArticles,
  writeArticles,
} from './routes';

const router = express.Router();

router.use(express.json());

router.get('/articles', getArticles);

router.post('/articles', writeArticles);

export {
  router as spreadsheetRouter,
};
