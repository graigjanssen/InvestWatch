var express = require('express');
var router = express.Router();
var request = require('request-json');
var client = request.createClient('http://finance.yahoo.com/webservice/v1/symbols/');

router.get('/:ticker', function(req, res){
    var ticker = req.params.ticker;
    client.get(ticker+'/quote?format=json&view=detail', function(err, response, body){
      res.json(body);
    });
});

module.exports = router;
