import { automateArticles } from './articles';
import { automateBook } from './book';

async function automateArticlesRoute(req, res) {
  const results = await automateArticles();
  res.json(results);
}

async function automateBookRoute(req, res) {
  const results = await automateBook();
  res.json(results);
}

export {
  automateArticlesRoute,
  automateBookRoute,
};
