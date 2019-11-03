import { getClient } from '../helpers/google-client';
import { getSpreadsheetApiUrl } from './sheets-api-url';

async function readSingleRange(tab, range) {
  if (tab && range && tab !== '' && range !== '') {
    try {
      const client = await getClient();
      const url = getSpreadsheetApiUrl(process.env.SHEET_ID, `values/${tab}!${range}`);
      const results = await client.request({ url, method: 'GET' });
      return results.data;
    } catch (e) {
      console.log(e);
      return e.message;
    }
  }
  return 'no value in tab or range';
}

async function readMultipleRanges(ranges) {
  if (ranges && typeof (ranges) === 'string') {
    try {
      const client = await getClient();
      const url = getSpreadsheetApiUrl(process.env.SHEET_ID, `values:batchGet?${ranges}`);
      const results = await client.request({ url, method: 'GET' });
      return results.data;
    } catch (e) {
      console.log(e);
      return e.message;
    }
  }
}

export {
  readSingleRange,
  readMultipleRanges,
};
