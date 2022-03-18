/* eslint-disable */
import DomainCommon from "./common";

const BookService = {

  // 一頁有 30 筆資料
  list: function (page = 1) {
    return new Promise((resolve, reject) => {
      return DomainCommon.fetchGet({
        url: `${DomainCommon.getApiUrl()}/books`,
        params: {page},
        resolve, reject
      });
    });
  },
};

export default BookService
/* eslint-disable */
