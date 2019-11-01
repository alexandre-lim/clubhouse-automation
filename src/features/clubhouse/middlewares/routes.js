import fetch from 'node-fetch';

async function getEpics(req, res) {
  const CLUBHOUSE_API_TOKEN = process.env.CLUBHOUSE_API_TOKEN;
  const url = `https://api.clubhouse.io/api/v3/epics?token=${CLUBHOUSE_API_TOKEN}`;
  try {
    const epics = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then(response => response.json());
    res.json(epics);
  } catch (e) {
    console.log(e);
    res.json('Error occured');
  }
}

export {
  getEpics
};
