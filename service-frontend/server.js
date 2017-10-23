var express = require('express');
var app = express();
var static_dir = __dirname;

// Serve static content (js, css, assets, etc.)
app.use('/', express.static(static_dir));

// Redirect all other requests to index.html, 
// - see https://angular.io/guide/deployment#server-configuration
app.use('*', function(req, res) {
   res.sendFile(`${static_dir}/index.html`);
});

// Start the server
var port = process.env.PORT || 3000;
var server = app.listen(port, function (){
   var host = server.address().address;
   var port = server.address().port;
   console.log(`### Server listening at http://${host}:${port}`);
});