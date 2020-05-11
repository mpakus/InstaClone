import API from './API';

export default function fetchPosts(page = 0, user = null, likesFilter = null, commentsFilter = null, per = 30) {
  const url = new URL(`${API.url}/posts`);
  url.search = new URLSearchParams({ page, per, user, likesFilter, commentsFilter });

  return fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  }).then((resp) => resp.json());
}
