import API from './API';
import Token from '../../utils/Token';

export default function fetchProfile() {
  const { token } = localStorage;

  if (!Token.isValid(token)) {
    return {};
  }

  const url = `${API.url}/profile.json`;
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  }).then((resp) => resp.json());
}
