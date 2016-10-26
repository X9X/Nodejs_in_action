var express = require('express');
var app = express();

app.route('/data')
  .get(function(req, res) {
    res.json({ data: 'mock data'});
  })

app.listen(3000);
