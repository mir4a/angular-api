module.exports = function(app) {

  //  404
  app.use(function (req, res, next) {
    res.status(404);

    if (req.accepts('html')) {
      return res.send("<h2>I'm sorry! I couldn't find that page.</h2>");
    }

    if (req.accepts('json')) {
      return res.send({error: 'Not found'});
    }

    //    default response
    res.type('txt');
    res.send("Hmm, couldn't find that page");
  });

  //  500
  app.use(function(err, req, res, next) {
    console.error('error at %s\n', req.url, err);
    res.status(500).send("Oops! We made a boo boo.");
  })
};