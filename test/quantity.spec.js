var frisby = require('frisby');
var url = 'https://openapi.etsy.com/v2/listings/active?api_key=96kg7j4073g5j4nc9tk5usgw';
var localUrl = 'localhost:3000/quantity';
var quantityJSON = {
  'average': 3,
  'highest': 5,
  'lowest': 2
};

frisby.create('Get JSON object')
.get(url)
.expectStatus(200)
.expectHeaderContains('content-type', 'application/json')
.inspectJSON()
.expectJSONLength('results', 25)
  .toss();

frisby.create('Get quantity result')
.get(localUrl)
.expectStatus(200)
  .toss();




//.expectJSON('0', {
//place: function(val) { expect(val).toMatchOrBeNull("Oklahoma City, OK");  }, // Custom matcher callback
//user: {
  //verified: false,
  //location: "Oklahoma City, OK",
  //url: "http://brightb.it"

  //}

//})
//.expectJSONTypes('0', {
  //id_str: String,
  //retweeted: Boolean,
//in_reply_to_screen_name: function(val) { expect(val).toBeTypeOrNull(String);  }, // Custom matcher callback
//user: {
  //verified: Boolean,
  //location: String,
  //url: String

  //}

  /*})*/
