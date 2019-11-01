import { fetchGet, fetchPost } from '../../helpers/fetch';

const clubhouseFeatures = {
  epics: 'epics',
  stories: 'stories',
  storiesSearch: 'stories/search',
  searchEpics: 'search/epics',
};

function getClubhouseApiUrl(feat = '', params = '') {
  const CLUBHOUSE_API_TOKEN = process.env.CLUBHOUSE_API_TOKEN;
  return `https://api.clubhouse.io/api/v3/${feat}?token=${CLUBHOUSE_API_TOKEN}&${params}`;
}

async function getEpics(req, res) {
  const url = getClubhouseApiUrl(clubhouseFeatures.epics);
  try {
    const epics = await fetchGet(url).then(response => response.json());
    res.json(epics);
  } catch (e) {
    console.log(e);
    res.json('Error occured');
  }
}

async function createEpics(req, res) {
  const url = getClubhouseApiUrl(clubhouseFeatures.epics);
  try {
    const body = JSON.stringify({
      name: 'Test Epic',
      description: 'Created Epic',
      labels: [{ name: 'Book' }]
    });
    const createdEpic = await fetchPost(url, body).then(response => response.json());
    res.json(createdEpic);
  } catch (e) {
    console.log(e);
    res.json('Error occured');
  }
}

async function createStory(req, res) {
  const url = getClubhouseApiUrl(clubhouseFeatures.stories);
  try {
    const body = JSON.stringify({
      name: 'Test Story',
      project_id: 14,
      epic_id: 20,
      description: 'Created Story',
      labels: [{ name: 'Book' }]
    });
    const createdStory = await fetchPost(url, body).then(response => response.json());
    res.json(createdStory);
  } catch (e) {
    console.log(e);
    res.json('Error occured');
  }
}

async function storiesSearch(req, res) {
  const url = getClubhouseApiUrl(clubhouseFeatures.storiesSearch);
  try {
    const body = JSON.stringify({
      project_id: 14
    });
    const stories = await fetchPost(url, body).then(response => response.json());
    res.json(stories);
  } catch (e) {
    console.log(e);
    res.json('Error occured');
  }
}

async function searchEpics(req, res) {
  const params = 'page_size=1&query=Reality is broken';
  const url = getClubhouseApiUrl(clubhouseFeatures.searchEpics, params);
  try {
    const epics = await fetchGet(url).then(response => response.json());
    res.json(epics);
  } catch (e) {
    console.log(e);
    res.json('Error occured');
  }
}

export {
  getEpics,
  createEpics,
  createStory,
  storiesSearch,
  searchEpics,
};
