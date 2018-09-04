import fetch from 'isomorphic-fetch';
import _ from 'lodash';
import { API_URL } from 'core/utils/const';

const createFetch = token => (endpoint, { body, method, ...options }) =>
  fetch(
    API_URL + endpoint,
    _.merge(options, {
      method: method || 'GET',
      body: body && JSON.stringify(body),
      headers: {
        ...(token
          ? {
              Authorization: `Bearer ${token}`,
            }
          : {}),
        ...(body
          ? {
              'Content-type': 'application/json',
            }
          : {}),
      },
    })
  ).then(async res => {
    const text = await res.text();
    const data = safelyParseJSON(text) || text;
    return data;
  });

export default createFetch;

const safelyParseJSON = text => {
  try {
    return JSON.parse(text);
  } catch (err) {
    return null;
  }
};
