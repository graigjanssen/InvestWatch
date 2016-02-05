var express   = require('express'),
    mongoose  = require('mongoose'),
    User      = require('../models/user'),
    router    = express.Router();

// GET ALL USERS //

router.get('/', function(req, res){
  User.find({}, function(err, dbUsers){
    res.json({users: dbUsers});
  });
});

// Get Current User //

router.get('/current', function(req, res){
  if (req.user) {
    res.json( { user: req.user } );
  } else {
    res.json( { description: 'No User Found' } );
  }
});

// NEW USER SIGN UP //

router.post('/', function(req, res){
  console.log(req.body);
  var newUser = new User( req.body );  // Make new user from sign up form
  console.log(newUser);
  newUser.save(function(err, dbUser){
    if (err){
      console.log('Error whilst savingeth: ', err);
    }
    console.log('dbUser: ', dbUser);
    res.json(dbUser);  // Send the new user as json
  });
});

// USER LOGIN //

router.post('/authenticate', function(req, res){  // POST request to /api/users/authenticate
  User.findOne({username: req.body.username}, function(err, dbUser){
    if (dbUser){ // if there is a user
      // Check password
      dbUser.authenticate(req.body.password, function(err, isMatch){
        if(isMatch){  // If correct
          dbUser.setToken(err, function(){ // use setToken method
            // Send token as json to be stored in cookie to show user is logged in
            res.json({description: 'success', token: dbUser.token, username: dbUser.username});
          });
        } else {
          res.json({description: 'invalid'});
        }
      });
    } else { // if no user found, return error
      res.json({description: 'invalid', status: 302});
    }
  });
});

// ADD STOCK TO WATCHLIST //

router.post('/stocks', function(req, res){
  var currentUser = req.user;
  var stockData = req.body.stock;
  currentUser.stocks.push(stockData);
  currentUser.save(function(err){
    res.json({description: 'stock saved'});
  });
});

module.exports = router;
