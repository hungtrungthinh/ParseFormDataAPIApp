
var port = process.env.PORT || 1337;
var baseHost = process.env.WEBSITE_HOSTNAME || 'localhost';

var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var qs = require('qs');

var app = express();
app.use(bodyParser.json());

app.get('/swagger/docs/v1', function(req,res){
	var fs = require('fs');
	var object = JSON.parse(fs.readFileSync('api.json','utf8'));
	res.json(object);
});

app.post('/encodedinput', function(req,res) {
         var result = qs.parse(req.body.PostData);
          console.log(JSON.stringify(result,null,2));
          res.json(result);
});

var server = http.createServer(app);

server.listen(port, baseHost, function () {
    console.log("Server started ... http://%s:%s",server.address().address,server.address().port);
});
