import { GoogleAuth } from 'google-auth-library';

async function getClient() {
  const auth = new GoogleAuth({
    scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
      'https://www.googleapis.com/auth/cloud-platform',
    ],
  });
  return await auth.getClient();
}

function getSpreadsheetApiUrl(spreadsheetId = '', rest = '') {
  return `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/${rest}`;
}


async function getArticles(req, res) {
  try {
    const client = await getClient();
    const url = getSpreadsheetApiUrl(process.env.SHEET_ID, 'values/Articles!A2:D5');
    const results = await client.request({ url, method: 'GET' });
    res.json(results.data);
  } catch (e) {
    console.log(e);
    res.json(e.message);
  }
}

async function writeArticles(req, res) {
  try {
    const client = await getClient();
    const url = getSpreadsheetApiUrl(process.env.SHEET_ID, 'values:batchUpdate');
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
          range: 'Articles!A4:C3',
          majorDimension: 'ROWS',
          values: [
            ['Write title', 'Description', 'Url value'],
          ]
        }
      ]
    });
    const results = await client.request({ url, method: 'POST', body });
    res.json(results.data);
  } catch (e) {
    console.log(e);
    res.json(e.message);
  }
}

export {
  getArticles,
  writeArticles,
};
