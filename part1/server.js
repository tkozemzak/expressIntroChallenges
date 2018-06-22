var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

app.get('/hello', function(req, res) {
  res.send("Hello!");
});

app.post('/create/:name', function(req, res){
  let name = `{
    "id":1,
    "name":"${req.params.name}"
  }`
  res.send(name)
})

app.get('/', function(req, res){
  res.sendFile('/Users/timothykozemzak/Desktop/Q2/expressIntroChallenges/part1/index.html')
})

app.get('/verify/:age', function(req, res){
  let ageInput = req.params.age;
  if(ageInput > 13){
    res.send("All Good")
  } else {
    res.sendStatus(403)
  }
})


app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
