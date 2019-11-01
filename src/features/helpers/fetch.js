import fetch from 'node-fetch';

function fetchGet(url) {
  return fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
}

function fetchPost(url, body = JSON.stringify({})) {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
  });
}

export {
  fetchGet,
  fetchPost,
};
