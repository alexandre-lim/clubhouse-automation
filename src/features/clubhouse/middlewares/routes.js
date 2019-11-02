import { getEpics, createEpics, searchEpics } from '../epics';
import { createStory, storiesSearch } from '../stories';
import { getProjects } from '../projects';

async function getEpicsRoute(req, res) {
  const results = await getEpics();
  res.json(results);
}

async function createEpicsRoute(req, res) {
  const body = JSON.stringify({
    name: 'Test Epic',
    description: 'Created Epic',
    labels: [{ name: 'Book' }]
  });
  const results = await createEpics(body);
  res.json(results);
}

async function createStoryRoute(req, res) {
  const body = JSON.stringify({
    name: 'Test Story',
    project_id: 14,
    epic_id: 20,
    description: 'Created Story',
    labels: [{ name: 'Book' }]
  });
  const results = await createStory(body);
  res.json(results);
}

async function storiesSearchRoute(req, res) {
  const body = JSON.stringify({
    project_id: 14
  });
  const results = await storiesSearch(body);
  res.json(results);
}

async function searchEpicsRoute(req, res) {
  const params = 'page_size=1&query=Reality is broken';
  const results = await searchEpics(params);
  res.json(results);
}

async function getProjectsRoute(req, res) {
  const results = await getProjects();
  res.json(results);
}

export {
  getEpicsRoute,
  createEpicsRoute,
  createStoryRoute,
  storiesSearchRoute,
  searchEpicsRoute,
  getProjectsRoute,
};
