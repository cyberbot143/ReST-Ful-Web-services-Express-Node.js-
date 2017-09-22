var express = require('express');
var app = express();

// if port is not set in environment ,the use port 3000
var port = process.env.PORT || 8000;

var bookRouter = express.Router();

app.use('/api',bookRouter);
bookRouter.route('/Books').get(function(req,res){
    var responsejson = {hello:"Hello"};
    res.json(responsejson);
})


app.get('/', function (req, res) {
   res.send('Welcome to my API');
})

var server = app.listen(port, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Magic Happens at http://%s:%s", host, port);

})