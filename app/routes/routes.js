var price = require('../controllers/price.server.controller.js');

module.exports = function(app) {

  app.get('/price', price.request);

  app.get('/quantity', price.request);

};
