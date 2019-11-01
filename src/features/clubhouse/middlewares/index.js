import express from 'express';
import {
  getEpics,
  createEpics,
  createStory,
} from './routes';

const router = express.Router();

router.use(express.json());

router.get('/epics', getEpics);

router.post('/epics', createEpics);

router.post('/stories', createStory);

export {
  router as clubhouseRouter,
};
