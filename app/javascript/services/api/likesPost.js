import Token from 'utils/Token';
import API from './API';

export default function likesPost(uid) {
  const { token } = localStorage;

  if (!Token.isValid(token)) {
    return {};
  }

  const url = `${API.url}/posts/${uid}/likes`;
  return fetch(url, {
    method: 'POST',
    headers: Token.headers(token)
  }).then((resp) => resp.json());
}
