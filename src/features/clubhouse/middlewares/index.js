import express from 'express';
import { getEpics } from './routes';

const router = express.Router();

router.use(express.json());

router.get('/epics', getEpics);


export {
  router as clubhouseRouter,
};
