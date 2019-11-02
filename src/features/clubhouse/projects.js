import { getClubhouseApiUrl, clubhouseFeatures } from './clubhouse-api-url';
import { fetchGet } from '../helpers/fetch';

async function getProjects() {
  const url = getClubhouseApiUrl(clubhouseFeatures.projects);
  try {
    const projects = await fetchGet(url).then(response => response.json());
    return projects;
  } catch (e) {
    console.log(e);
    return 'Error occured';
  }
}

export {
  getProjects,
};
