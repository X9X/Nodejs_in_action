const axios = require('axios');

function * getPage() {
  const page1 = yield axios.get('http://www.baidu.com');
  const page2 = yield axios.get('https://www.google.com');
  return [page1, page2];
}
