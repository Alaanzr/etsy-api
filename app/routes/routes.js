var price = require('../controllers/price.server.controller.js');
var quantity = require('../controllers/quantity.server.controller.js');
var etsyData = require('../controllers/apiCall.server.controller.js');

module.exports = function(app) {

  // app.get('/price', price.request);

  // app.get('/quantity', quantity.request);

  app.get('/etsyData', etsyData.getData);

};
