var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

//var buf = fs.readFileSync('index.html')
//var buf = fs.readFileSync('rainy_mood_dot_com.html')
var buf = fs.readFileSync('kim_dong_nyng.html')

app.get('/', function(request, response) {
    response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
