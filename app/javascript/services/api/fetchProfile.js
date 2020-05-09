import Token from '../../utils/Token';

export default function fetchProfile() {
  const { token } = localStorage;

  if (!Token.isValid(token)) {
    return {};
  }

  return fetch('/api/v1/profile', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  }).then((resp) => resp.json());
}
