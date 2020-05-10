import API from './API';

export default function fetchPosts(page = 0, per = 30) {
  const url = new URL(`${API.url}/posts`);
  url.search = new URLSearchParams({ page, per });

  return fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  }).then((resp) => resp.json());
}
