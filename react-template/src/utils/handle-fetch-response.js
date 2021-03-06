export function parseResponse(response) {
  if (response.status >= 200 && response.status < 300) {
    return response.json().then((json) => json);
  } else if (response.status == 404 || response.status == 401 || response.status == 500) {
    return response.text().then((err) => Promise.reject(err));
  } else {
    return response.json().then((err) => Promise.reject(err));
  }
}

export function parseEmptyResponse(response) {
  if (response.status >= 200 && response.status < 300) {
    return response.text().then((text) => text);
  } else {
    return response.json().then((err) => Promise.reject(err));
  }
}
