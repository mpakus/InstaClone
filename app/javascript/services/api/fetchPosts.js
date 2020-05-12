import API from './API';

export default function fetchPosts(page = 0, user = null, likesFilter = null, commentsFilter = null, per = 30) {
  const params = { page, per, user, likesFilter, commentsFilter };
  const url = `${API.url}/posts.json?${API.toQuery(params)}`;

  return fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  }).then((resp) => resp.json());
}
