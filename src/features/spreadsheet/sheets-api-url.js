export function getSpreadsheetApiUrl(spreadsheetId = '', rest = '') {
  return `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/${rest}`;
}
