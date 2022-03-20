/* eslint-disable */
import queryString from "query-string";

let apiToken;
// let currentLocale = "zh-tw";
let localStorage = window.localStorage;

class DomainCommon {

  static fetchGet({url, params, resolve, reject, timeout = undefined, accept}) {

    return _fetch({url, resolve, reject, method: 'GET', params, timeout, accept});
  }

  static fetchPost({url, params, jsonBody, resolve, reject, timeout = undefined, accept}) {

    return _fetch({url, resolve, reject, method: 'POST', params, data: jsonBody, timeout, accept});
  }

  static fetchPut({url, params, jsonBody, resolve, reject, timeout = undefined, accept}) {

    return _fetch({url, resolve, reject, method: 'PUT', params, data: jsonBody, timeout, accept});
  }

  static fetchPatch({url, params, jsonBody, resolve, reject, timeout = undefined, accept}) {

    return _fetch({url, resolve, reject, method: 'PATCH', params, data: jsonBody, timeout, accept});
  }

  static fetchDelete({url, params, jsonBody, resolve, reject, timeout = undefined, accept}) {

    return _fetch({url, resolve, reject, method: 'DELETE', params, data: jsonBody, timeout, accept});
  }

  static getApiUrl() {
    return 'https://cors-anywhere-dot-vr-cam-161603.uc.r.appspot.com/https://demo.api-platform.com';
  }

  static setAPIToken(accessToken = undefined) {
    apiToken = accessToken;
    localStorage.setItem('accessToken', accessToken);
  }

  static clearAPIToken() {
    apiToken = undefined;
    localStorage.removeItem("accessToken");
  }

  static getAPIToken() {
    return apiToken;
  }

}

async function _fetch({url, method, params, data, optionHeaders = {}, resolve, reject, accept = 'application/json'}) {

  let options = method ? {method} : {};
  options = data ?
    Object.assign(options, {body: JSON.stringify(data)}) :
    options;

  // set apiTokenHeader if available
  options.headers = {
    ...optionHeaders,
    ...getApiTokenHeader(),
    accept,
    'Content-Type': 'application/json',
  };

  try {

    const stringifyStr = queryString.stringify(params); //=> 'foo=unicorn&like=pizza'
    const tempUrl = params ? `${url}?${stringifyStr}` : url;

    let response = await fetch(tempUrl, options);

    if (check2XXStatus(response.status)) {
      if (response.status === 204) {
        resolve({});
      } else {
        try {
          let responseJson = await response.json();
          resolve(responseJson);

        } catch (e) {
          console.error(e);
          reject(e);
        }
      }
    } else {
      try {
        let responseJson = await response.json();
        reject({...responseJson, status: response.status});
      } catch (e) {
        //avoid response data can't serialization to json
        console.error(e);
        reject({status: response.status});
      }
    }
  } catch (e) {
    console.error(e);
    reject(e);
  }
}

function check2XXStatus(status) {
  return status >= 200 && status < 300;
}

function getApiTokenHeader() {
  return {Authorization: apiToken /* && `Bearer ${apiToken}` */};
}

export default DomainCommon;
/* eslint-disable */
