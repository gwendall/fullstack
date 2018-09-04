import createFetch from 'core/api/fetch';
const fetch = createFetch();

export const signup = ({ name, email, password }) =>
  fetch('/users', {
    method: 'POST',
    body: {
      name,
      email,
      password,
    },
  });

export const logout = ({ refreshToken }) =>
  fetch('/access-tokens', {
    method: 'DELETE',
    body: {
      refreshToken,
    },
  });
