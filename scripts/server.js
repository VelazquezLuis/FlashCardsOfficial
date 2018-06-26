
var http = require('http');
var fs = require('fs');

var requestHandler = function (req, res) {
  if (req.url.indexOf('contact') >= 0) {
    res.end(fs.readFileSync('contact.html'));
  } else {
    res.end(fs.readFileSync('index.html'));
  }
}

var server = http.createServer(requestHandler);

server.listen(9000, () => {
  console.log('server is alive');
});