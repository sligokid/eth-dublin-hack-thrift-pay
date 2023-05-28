//server.js file
var express = require('express')
var app = express()
app.use(express.static(__dirname)) //serves the static html file
var server = app.listen(3000, () =>{
console.log("server is listening on port", server.address().port);
}) //gets express server started and listening for requests
