import API from './API';

export default function fetchPost(uid) {
  const url = `${API.url}/posts/${uid}`;

  return fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  }).then((resp) => resp.json());
}
