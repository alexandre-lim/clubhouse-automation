import { getClient } from '../helpers/google-client';
import { getSpreadsheetApiUrl } from './sheets-api-url';

async function writeMultipleRanges(body) {
  if (body && typeof (body) === 'string') {
    try {
      const client = await getClient();
      const url = getSpreadsheetApiUrl(process.env.SHEET_ID, 'values:batchUpdate');
      const results = await client.request({ url, method: 'POST', body });
      return results.data;
    } catch (e) {
      console.log(e);
      return e.message;
    }
  }
  return 'body is missing or not of string type';
}

export {
  writeMultipleRanges,
};
