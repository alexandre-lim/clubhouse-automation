import { readSingleRange, readMultipleRanges } from '../read';
import { writeMultipleRanges } from '../write';

async function getArticlesRoute(req, res) {
  const tab = 'Tests';
  const range = 'A3:D5';
  const results = await readSingleRange(tab, range);
  res.json(results);
}

async function writeArticlesRoute(req, res) {
  const body = JSON.stringify({
    valueInputOption: 'USER_ENTERED',
    data: [
      {
        range: 'Tests!A3',
        majorDimension: 'COLUMNS',
        values: [
          ['']
        ]
      },
      {
        range: 'Tests!A4:C4',
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

async function getBookRoute(req, res) {
  const ranges = 'ranges=Tests!E4:E4&ranges=Tests!F4:F&valueRenderOption=UNFORMATTED_VALUE&majorDimension=COLUMNS';
  const results = await readMultipleRanges(ranges);
  res.json(results);
}

export {
  getArticlesRoute,
  writeArticlesRoute,
  getBookRoute,
};
