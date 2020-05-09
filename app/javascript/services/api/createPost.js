import Token from 'utils/Token';

export default function createPost(image, content) {
  const { token } = localStorage;

  if (!Token.isValid(token)) {
    return {};
  }

  const formData = new FormData();
  formData.append('image', image);
  formData.append('content', content);

  return fetch('/api/v1/posts', {
    method: 'POST',
    headers: Token.headers(token),
    body: formData
  }).then((resp) => resp.json());
}
