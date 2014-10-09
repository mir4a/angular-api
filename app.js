var express = require('express');
var routes = require('./back-end/routes/index');
var path = require('path');
var app = express();

var staticPath = path.normalize(__dirname + '/front-end');
app.use(express.static(staticPath));

staticPath = path.normalize(__dirname + '/front-end/vendor');
app.use('/vendor', express.static(staticPath));

staticPath = path.normalize(__dirname + '/front-end/js');
app.use('/js', express.static(staticPath));

staticPath = path.normalize(__dirname + '/api');
app.use('/api', express.static(staticPath));

routes(app);

app.get('/', function (req, res) {
  res.status(200).send('Route \'/\' is get');
});


app.listen(3000, function () {
  console.log('now listening on localhost:3000');
});
