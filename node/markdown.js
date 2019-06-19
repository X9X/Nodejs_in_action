const fs = require('fs');
const path = require('path');
const axios = require('axios');
fs.readFile(path.resolve(__dirname, './curltxt'), (err, data) => {
  if (err) throw err;
  const items = data.toString().split('\n');
  items.forEach(url => {
    console.log(url);
    axios.get(url);
  })
});
