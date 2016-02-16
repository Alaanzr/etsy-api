var apiCall = require('./apiCall.server.controller.js');
var request = require('request');

exports.getData = function() {
  request('https://openapi.etsy.com/v2/listings/active?api_key=96kg7j4073g5j4nc9tk5usgw', function(error, response, body) {
    var etsyData = {};
      if (!error && response.statusCode === 200) {
        etsyData = JSON.parse(body);
        //console.log(etsyData);
      } else {
        console.log(error);
      }
      console.log(etsyData.results[0]);
      quantity(etsyData);
      return etsyData;
    });
};

function quantity(JsonObj) {
  var result = [];
  JsonObj.forEach(function(item) {
    result.push(item.quantity);
  });
  console.log(result);
  return result;
}

exports.average = function(JsonObj) {
  var tot = 0;
  var average = 0;
  var length = JsonObj.length;

  JsonObj.forEach(function(item){
    tot += item.quantity;
  });
    average = tot / length;
    return average;
};

exports.min = function(JsonObj) {
  return Math.min.apply(null, quantity(JsonObj));
};

exports.max = function(JsonObj){
  return Math.max.apply(null, quantity(JsonObj));
};

