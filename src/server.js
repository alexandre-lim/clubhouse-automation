import express from 'express';
import logger from 'morgan';
import { clubhouseRouter } from './features/clubhouse/middlewares';
import { initEnvVar } from './env';
import { spreadsheetRouter } from './features/spreadsheet/middlewares';
import { automateRouter } from './features/automate/middlewares';

initEnvVar();

const app = express();
const dev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT;

if (dev) {
  app.use(logger('dev'));
} else {
  app.use(logger('combined'));
}

const router = express.Router();

app.get('/', (req, res) => {
  res.send('Welcome to Express starter app');
});

router.use('/clubhouse', clubhouseRouter);

router.use('/spreadsheet', spreadsheetRouter);

router.use('/automate', automateRouter);

app.use('/api', router);

app.listen(PORT, () => console.log(`App listening on port ${PORT}! => http://localhost:${PORT}/`));
