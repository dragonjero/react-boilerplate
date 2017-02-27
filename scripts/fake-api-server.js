var fs = require('fs');
var path = require('path');
var jsonServer = require('json-server');
var chalk = require('chalk');

function prettyPrint (argv, object, rules) {
  var host = argv.host === '0.0.0.0' ? 'localhost' : argv.host
  var port = argv.port
  var root = 'http://' + host + ':' + port

  console.log()
  console.log(chalk.bold('  Resources'))
  for (var prop in object) {
    console.log('  ' + root + '/' + prop)
  }

  if (rules) {
    console.log()
    console.log(chalk.bold('  Other routes'))
    for (var rule in rules) {
      console.log('  ' + rule + ' -> ' + rules[rule])
    }
  }

  console.log()
  console.log(chalk.green('  Fake api server started!'))
  console.log(chalk.red('  ' + root))
  console.log()
}

console.log();
console.log(chalk.cyan('  \\{^_^}/ hi!'));

var filename = path.resolve('./config/json-server/db.js');
delete require.cache[filename];
var db = require(filename)();

var server = jsonServer.create();
var router = jsonServer.router(db);
var middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Set custom middlewares
server.use(function(req, res, next) {
  if (req.method === 'GET' && req.query) {
    var sort = req.query.sort || '';
    var order = 'ASC';

    if (sort.startsWith('-')) {
      sort = sort.substr(1);
      order= 'DESC';
    }

    var query = {
      _sort : sort,
      _order: order,
      q: req.query.q
    }

    if (!query.q) { //full-text doesn't work along with paging
      query._start = req.query.offset;
      query._limit = req.query.limit;
    }

    req.query = query;
  }

  next();
})

// Set routes
var routes = JSON.parse(fs.readFileSync('./config/json-server/routes.json'));
var rewriter = jsonServer.rewriter(routes);
server.use(rewriter);

// Set auth route
// server.post('/api/v3/auth/token', function(req, res) {
//   res.jsonp({
//     "accessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUwOTA5NTIiLCJ1c2VyTmFtZSI6Ik1BU1RFUl9VU0VSIiwiZW1haWwiOm51bGwsImZpcnN0TmFtZSI6ImFkbWluIiwibGFzdE5hbWUiOiJhZG1pbiIsInJvbGVzIjpbXSwiZG9oVG9rZW4iOm51bGwsImlhdCI6MTQ3NzQzMjkyMH0._ZGrxjkbh5GeFHEweJGPAszsKZwIYpec1Ou92Own5KQ"
//   });
// });

// Use default router
server.use(router);

var opts = {port: 4000, host: '0.0.0.0'};
server.listen(opts.port, function () {
  prettyPrint(opts, db, routes);
});
