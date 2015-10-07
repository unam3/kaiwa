var fs = require('fs');
var express = require('express');

var config = JSON.parse(fs.readFileSync('./dev_config.json'));

var app = express();
var serveStatic = require('serve-static');

app.use(serveStatic('./public'));

app.listen(config.http.port, function () {
    console.log('Kaiwa running at: ' + config.http.baseUrl);
});
