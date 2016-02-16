<<<<<<< HEAD

 var frisby = require('frisby');
 var localUrl = 'http://localhost:3000/etsyData';

 frisby.create('Get JSON object')
 .get(localUrl)
 .expectStatus(200)
 .expectHeaderContains('content-type', 'application/json')
 .expectJSONLength('results', 25)
   .toss();
=======
// var frisby = require('frisby');
// var localUrl = 'http://localhost:3000/price';
//
// frisby.create('Get JSON object')
// .get(localUrl)
// .expectStatus(200)
// .expectHeaderContains('content-type', 'application/json')
// .expectJSONLength('results', 25)
//   .toss();
>>>>>>> d413cf799a4619f42a2c22ad91c52cf3732eeb5e
