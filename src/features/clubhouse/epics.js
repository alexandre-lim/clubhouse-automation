import { getClubhouseApiUrl, clubhouseFeatures } from './clubhouse-api-url';
import { fetchGet, fetchPost } from '../helpers/fetch';

async function getEpics() {
  const url = getClubhouseApiUrl(clubhouseFeatures.epics);
  try {
    const epics = await fetchGet(url).then(response => response.json());
    return epics;
  } catch (e) {
    console.log(e);
    return 'Error occured';
  }
}

async function createEpics(body) {
  if (body && typeof (body) === 'string') {
    const url = getClubhouseApiUrl(clubhouseFeatures.epics);
    try {
      const createdEpic = await fetchPost(url, body).then(response => response.json());
      return createdEpic;
    } catch (e) {
      console.log(e);
      return 'Error occured';
    }
  }
  return 'body is missing or not of string type';
}

async function searchEpics(params) {
  if (params && typeof (params) === 'string' && params !== '') {
    const url = getClubhouseApiUrl(clubhouseFeatures.searchEpics, params);
    try {
      const epics = await fetchGet(url).then(response => response.json());
      return epics;
    } catch (e) {
      console.log(e);
      return 'Error occured';
    }
  }
  return 'params is missing or format problem';
}

export {
  getEpics,
  createEpics,
  searchEpics,
};
