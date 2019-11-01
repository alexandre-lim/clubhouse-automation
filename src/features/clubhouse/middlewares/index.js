import express from 'express';
import { getEpics, createEpics } from './routes';

const router = express.Router();

router.use(express.json());

router.get('/epics', getEpics);

router.post('/epics', createEpics);

export {
  router as clubhouseRouter,
};
