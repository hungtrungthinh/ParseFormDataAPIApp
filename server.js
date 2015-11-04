
var port = process.env.PORT || 1337;
var baseHost = process.env.WEBSITE_HOSTNAME || 'localhost';

var http = require('http');
var express = require('express');
var swaggerize = require('swaggerize-express');
var bodyParser = require('body-parser');
var qs = require('qs');

var app = express();

app.use('/', express.static(__dirname + '/html'));
app.get('/swagger', function(req,res) { res.sendFile(__dirname + '/api.json'); });
app.use(bodyParser.json());
app.use(swaggerize({
    api: require('./api.json'),
    docspath: '/swagger',
    handlers: {
      "encodedinput": {
        "$post": function(req,res) {
          var result = qs.parse(req.body.PostData);
          console.log(JSON.stringify(result,null,2));
          res.json(result);
 
        }
      }
    }
}));

var server = http.createServer(app);

server.listen(port, 'localhost', function () {
  
  if (baseHost === 'localhost') 
  { 
    app.setHost(baseHost + ':' + port); 
  }
  else
  { 
    app.setHost(baseHost); 
  }
  
  console.log("Server started .."); 

});
