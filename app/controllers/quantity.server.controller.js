var apiCall = require('./apiCall.server.controller.js');

//exports.request = function(){
 //var etsyData = apiCall();
 //console.log('etsy call', etsyData);
//};

function quantity(JsonObj) {
  var result = [];
  JsonObj.forEach(function(item) {
    result.push(item.quantity);
  });
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

