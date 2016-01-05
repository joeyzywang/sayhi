var express = require('express');

// Constants
var PORT = 8080;

// App
var app = express();
app.get('/', function (req, res) {
      res.send('<h1> Welcome to sayhi Web App !</h1> <br><br>  Visit /hi/ with your name, like <a href="/hi/Joey%20Wang" >Say hi to Joey Wang !</a>, the web page will say hi to you ! \n');
      
});

app.get('/hi/:name', function (req, res) {
      console.log(req.params);
      res.send('Hi, ' +  req.params.name + '!!\n');  
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
