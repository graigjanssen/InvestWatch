// No longer needed, but keeping just in case.  No longer need to make API call from back end, now making calls directly to Yahoo Finance from FinanceApiFactory

// var express = require('express');
// var router = express.Router();
// var request = require('request-json');
// var client = request.createClient('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22');
//
// router.get('/:ticker', function(req, res){
//     var ticker = req.params.ticker;
//     client.get(ticker + '%22)%0A%09%09&format=json&diagnostics=true&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback=', function(err, response, body){
//       if (err){
//         console.log("error: " + err);
//       }
//       console.log("response: " + response);
//       console.log("body: " + body);
//       res.json(body);
//     });
// });
//
// module.exports = router;
