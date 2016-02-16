var quantityController = require('../app/controllers/quantity.server.controller.js');

describe('quantity methods',function() {

  var jsonItem =
    [ {
      shop_section_id: 10463779,
      quantity: 1
    },
    {
      shop_section_id: 10463780,
      quantity: 4
    },
    {
      shop_section_id: 10463790,
      quantity: 3
    },
    {
      shop_section_id: 10463766,
      quantity: 5
    },
    ];

    it('should return average', function() {
      expect(quantityController.average(jsonItem)).toEqual((1+4+3+5)/4);
      console.log('item', jsonItem);
      console.log('function', quantityController.average(jsonItem));
    });

    it('should return the min quantity per item', function(){
      expect(quantityController.min(jsonItem)).toBe(1);
    });

    it('should return the max quantity per item', function(){
      expect(quantityController.max(jsonItem)).toBe(5);
    });

});
