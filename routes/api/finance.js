var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/:ticker', function(req, res){
    var ticker = req.params.ticker;
    console.log(ticker);
    request('http://finance.yahoo.com/webservice/v1/symbols/'+ticker+'/quote?format=json&view=detail', function(err, response, body){
      if (err) {
        console.log('Error!', err);
      }
      console.log(response);
      res.json({body: body});
    });
});

module.exports = router;
