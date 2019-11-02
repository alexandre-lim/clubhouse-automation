import express from 'express';
import {
  getEpicsRoute,
  createEpicsRoute,
  createStoryRoute,
  storiesSearchRoute,
  searchEpicsRoute,
  getProjectsRoute,
} from './routes';

const router = express.Router();

router.use(express.json());

router.get('/epics', getEpicsRoute);

router.get('/search/epics', searchEpicsRoute);

router.get('/projects', getProjectsRoute);

router.post('/epics', createEpicsRoute);

router.post('/stories', createStoryRoute);

router.post('/stories/search', storiesSearchRoute);

export {
  router as clubhouseRouter,
};
