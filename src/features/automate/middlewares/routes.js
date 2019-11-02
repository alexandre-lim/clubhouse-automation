import { automateArticles } from './articles';

async function automateArticlesRoute(req, res) {
  const results = await automateArticles();
  res.json(results);
}

export {
  automateArticlesRoute,
};
