import express from 'express';
import {
  getEpics,
  createEpics,
  createStory,
  storiesSearch,
  searchEpics,
} from './routes';

const router = express.Router();

router.use(express.json());

router.get('/epics', getEpics);

router.get('/search/epics', searchEpics);

router.post('/epics', createEpics);

router.post('/stories', createStory);

router.post('/stories/search', storiesSearch);

export {
  router as clubhouseRouter,
};
