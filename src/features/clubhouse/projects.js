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

/**
 * TO DO for refacto and try catch error handling
 */
// async function getProjectIdByName(name) {
//   try {
//     const projects = await getProjects();
//     let projectId = null;
//     for (let j = 0, len = projects.length; j < len; j += 1) {
//       if (projects[j].name === name) {
//         projectId = projects[j].id;
//       }
//     }
//     return projectId;
//   } catch (e) {
//     console.log(e);
//     return 'Error occured';
//   }
// }

export {
  getProjects,
};
