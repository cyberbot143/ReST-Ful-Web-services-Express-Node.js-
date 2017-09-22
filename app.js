var express = require('express'),
mongoose = require('mongoose'),
bodyParser = require('body-parser');;
mongoose.connect("mongodb://localhost:27017/bookAPI"); //connection to mongodb
var Book = require('./models/bookModel');

var app = express();
// if port is not set in environment ,the use port 3000
var port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

bookRouter = require('./Routes/bookRoutes')(Book);

app.use('/api/Books',bookRouter);

app.get('/', function (req, res) {
   res.send('Welcome to my API');
})

var server = app.listen(port, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Magic Happens at http://%s:%s", host, port);

})