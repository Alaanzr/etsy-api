var request = require('request');

module.exports = function(req, res) {
  request('https://openapi.etsy.com/v2/listings/active?api_key=96kg7j4073g5j4nc9tk5usgw', function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var etsyData = JSON.parse(body);
      return etsyData.results;
    } else {
      console.log(error);
    }
  });
};
