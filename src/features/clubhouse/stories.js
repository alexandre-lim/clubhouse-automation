import { getClubhouseApiUrl, clubhouseFeatures } from './clubhouse-api-url';
import { fetchPost } from '../helpers/fetch';

async function createStory(body) {
  if (body && typeof (body) === 'string') {
    const url = getClubhouseApiUrl(clubhouseFeatures.stories);
    try {
      const createdStory = await fetchPost(url, body).then(response => response.json());
      return createdStory;
    } catch (e) {
      console.log(e);
      return 'Error occured';
    }
  }
  return 'body is missing or not of string type';
}

async function createStories(body) {
  if (body && typeof (body) === 'string') {
    const url = getClubhouseApiUrl(clubhouseFeatures.storiesBulk);
    try {
      const createdStory = await fetchPost(url, body).then(response => response.json());
      return createdStory;
    } catch (e) {
      console.log(e);
      return 'Error occured';
    }
  }
  return 'body is missing or not of string type';
}

async function storiesSearch(body) {
  if (body && typeof (body) === 'string') {
    const url = getClubhouseApiUrl(clubhouseFeatures.storiesSearch);
    try {
      const stories = await fetchPost(url, body).then(response => response.json());
      return stories;
    } catch (e) {
      console.log(e);
      return 'Error occured';
    }
  }
}

export {
  createStory,
  createStories,
  storiesSearch,
};
