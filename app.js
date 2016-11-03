var express = require('express');
var app = express();
var browserInfo = require('./browserInfo.js');



app.get("/api/myinfo",browserInfo.getInfo);


app.listen(process.env.PORT || 8080, function () {
  console.log('Example app listening on port '+process.env.PORT);
});