
module.exports = function (app) {

  app.get('/', function (req, res) {
    res.render(__dirname + '/../../front-end/templates/index.jade');
  });

  app.get('/api/:name', function (req, res) {
//    res.sendFile(__dirname + '/../../api/messages.json');

    var options = {
      root: __dirname + '/api/',
      dotfiles: 'deny',
      headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
      }
    };

    var fileName = req.params.name;

    res.sendFile(fileName, options, function (err) {
      if (err) {
        console.log(err);
        res.status(err.status).end();
      }
      else {
        console.log('Sent:', fileName);
      }
    });


  });

  app.get('*', function (req, res) {
    res.status(404).send('Not found');
  });

};