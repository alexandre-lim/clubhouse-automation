import express from 'express';
import {
  getEpics,
  createEpics,
  createStory,
  storiesSearch,
} from './routes';

const router = express.Router();

router.use(express.json());

router.get('/epics', getEpics);

router.post('/epics', createEpics);

router.post('/stories', createStory);

router.post('/stories/search', storiesSearch);

export {
  router as clubhouseRouter,
};
