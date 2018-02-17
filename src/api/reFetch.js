/* External dependencies */
import qs from 'qs';

class ReFetch {
  constructor() {
    this.BASE_URL = null;
  }

  checkStatus(res) {
    if (res.status >= 200 && res.status < 300) {
      return res;
    }
    const error = new Error(res.statusText);
    error.response = res;
    throw error;
  }

  parseJSON(res) {
    return res.json();
  }

  setBaseUrl(url) {
    this.BASE_URL = url;
  }

  getDefaultHeader() {
    return {
      'Content-Type': 'application/json',
    };
  }

  fetch(url, options) {
    return fetch(this.BASE_URL + url, options)
      .then(this.checkStatus)
      .then(this.parseJSON);
  }

  get(url, query) {
    return this.fetch(query ? `${url}?${qs.stringify(query)}` : url, {
      method: 'GET',
      headers: {
        ...this.getDefaultHeader(),
      },
    });
  }
}

const reFetch = new ReFetch();
reFetch.setBaseUrl('http://localhost:8080');

export default reFetch;
