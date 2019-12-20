const axios = require('axios');
const BASE_URL_HAPI = 'http://54.144.101.230:3010';

module.exports = {

  baseUriApi: BASE_URL_HAPI,

  get: (url, jwt = null, contentType = 'application/json') => {
    return new Promise((resolve, reject) => {
      axios.defaults.headers['jwt'] = jwt;
      axios({
        method: 'get',
        url: BASE_URL_HAPI + url,
      })
        .then(result => {
          resolve(result);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  post: (url, body, jwt = null, contentType = 'application/json') => {
    return new Promise((resolve, reject) => {
      axios.defaults.headers['jwt'] = jwt;
      axios({
        method: 'post',
        url: BASE_URL_HAPI + url,
        data: body,
      })
        .then(result => {
          resolve(result);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  put: (url, body, jwt = null, contentType = 'application/json') => {
    return new Promise((resolve, reject) => {
      axios.defaults.headers['jwt'] = jwt;
      axios({
        method: 'put',
        url: BASE_URL_HAPI + url,
        data: body,
      })
        .then(result => {
          resolve(result);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  delete: (url, body, contentType = 'application/json') => {
    return new Promise((resolve, reject) => {
      axios.defaults.headers['jwt'] = jwt;
      axios({
        method: 'delete',
        url: BASE_URL_HAPI + url,
        data: body,
      })
        .then(result => {
          resolve(result);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

};
