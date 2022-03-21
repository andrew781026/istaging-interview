/* eslint-disable */
import DomainCommon from "./common";

const BookService = {

  // 一頁有 30 筆資料
  list: function (page = 1) {
    return new Promise((resolve, reject) => {
      return DomainCommon.fetchGet({
        url: `${DomainCommon.getApiUrl()}/books`,
        params: {page},
        resolve, reject,
        optionHeaders: {
          'accept': 'application/ld+json' // 要用 ld+json 才取的到 @id
        },
      });
    });
  },

  get: function (id) {
    return new Promise((resolve, reject) => {
      return DomainCommon.fetchGet({
        url: `${DomainCommon.getApiUrl()}/books/${id}`,
        resolve, reject
      });
    });
  },

  add: function (book) {
    return new Promise((resolve, reject) => {
      return DomainCommon.fetchPost({
        url: `${DomainCommon.getApiUrl()}/books`,
        jsonBody: book,
        resolve, reject,
        optionHeaders: {
          'Content-Type': 'application/ld+json',
          'accept': 'application/ld+json'
        }
      });
    });
  },

  update: function (id, book) {
    return new Promise((resolve, reject) => {
      return DomainCommon.fetchPatch({
        url: `${DomainCommon.getApiUrl()}/books/${id}`,
        jsonBody: book,
        resolve, reject,
        optionHeaders: {
          'Content-Type': 'application/merge-patch+json',
          'accept': 'application/ld+json'
        }
      });
    });
  },
};

export default BookService
/* eslint-disable */
