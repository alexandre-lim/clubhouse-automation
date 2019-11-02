import { readSingleRange } from '../read';
import { writeMultipleRanges } from '../write';

async function getArticlesRoute(req, res) {
  const tab = 'Articles';
  const range = 'A3:D5';
  const results = await readSingleRange(tab, range);
  res.json(results);
}

async function writeArticlesRoute(req, res) {
  const body = JSON.stringify({
    valueInputOption: 'USER_ENTERED',
    data: [
      {
        range: 'Articles!A3',
        majorDimension: 'COLUMNS',
        values: [
          ['']
        ]
      },
      {
        range: 'Articles!A4:C4',
        majorDimension: 'ROWS',
        values: [
          ['Write title', 'Description', 'Url value'],
        ]
      }
    ]
  });
  const results = await writeMultipleRanges(body);
  res.json(results);
}

export {
  getArticlesRoute,
  writeArticlesRoute
};
