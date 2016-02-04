// MODULES //

var express     = require('express'),
    morgan      = require('morgan'),
    mongoose    = require('mongoose'),
    bodyParser  = require('body-parser');

var app = express();

app.set('view engine', 'ejs');

// MIDDLEWARE //

app.use(morgan('dev'));

app.use(express.static('./public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// DATABASE //

var dbPath = process.env.MONGOLAB_URI || 'mongodb://localhost/investwatch';
mongoose.connect(dbPath);

// ROUTING //

var indexRoute = require('./routes/index');
app.use('/', indexRoute);

var usersRoute = require('./routes/users');
app.use('/users', usersRoute);

var financeApiRoute = require('./routes/api/finance');
app.use('/api/finance', financeApiRoute);

// LISTENING //

var port = process.env.port || 8080;
app.listen(port, function(){
  console.log('Listening on port ' + port);
});
