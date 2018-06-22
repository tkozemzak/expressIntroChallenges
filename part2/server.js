var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
var fs = require('fs')
var names = 'e';

app.get('/yourroute', function(req, res) {
  res.send("stuff");
});


//challenge1+stretch
let id = 1;

app.post("/create/:name/:age", function(req, res) {
  id++;
  let nameAge = `{
    "id": ${id}
    "name": ${req.params.name},
    "age": ${req.params.age}
  }`
  res.send(nameAge)
  names += `{
    "name" : "${req.params.name}",
    "age" : ${req.params.age}
}`
  names += fs.writeFileSync('./storage.json', names)
})
//challenge2
app.get("/", function(req, res) {
  res.sendFile("/Users/timothykozemzak/Desktop/Q2/expressIntroChallenges/part2/storage.json")
})

//challenge 3
app.get("/:name", function(req, res) {
console.log(names)
})


app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
