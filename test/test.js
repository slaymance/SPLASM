var chai = require('chai');  
var assert = chai.assert;
var sinon = require('sinon');
/* The most common scenarios with spies (function wrappers that let you 'spy' on function calls.)
	involve...
Checking how many times a function was called
Checking what arguments were passed to a function

*/

/*Stubs (function replacements. any call to the specific function will instead call the stub)
	have a few common uses:
You can use them to replace problematic pieces of code
You can use them to trigger code paths that wouldn't otherwise trigger - such as error handling
You can use them to help test asynchronous code more easily
*/

/*

*/
describe('Mongo DB', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});
