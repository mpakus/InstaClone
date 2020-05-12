import Token from 'utils/Token';
import API from './API';

export default function createComment(uid, content) {
  const { token } = localStorage;

  if (!Token.isValid(token)) {
    return {};
  }

  const formData = new FormData();
  formData.append('content', content);

  const url = `${API.url}/posts/${uid}/comments`;
  return fetch(url, {
    method: 'POST',
    headers: Token.headers(token),
    body: formData
  }).then((resp) => resp.json());
}
