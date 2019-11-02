export const clubhouseFeatures = {
  epics: 'epics',
  stories: 'stories',
  storiesSearch: 'stories/search',
  searchEpics: 'search/epics',
  projects: 'projects',
};

export function getClubhouseApiUrl(feat = '', params = '') {
  const CLUBHOUSE_API_TOKEN = process.env.CLUBHOUSE_API_TOKEN;
  return `https://api.clubhouse.io/api/v3/${feat}?token=${CLUBHOUSE_API_TOKEN}&${params}`;
}
