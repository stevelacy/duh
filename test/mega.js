var fs = require('fs');
var path = require('path');
var should = require('should');
var duh = require('../');

require('mocha');


describe('duh()', function(){

file = fs.readFileSync(path.join(__dirname, 'fixtures/list.lst'));
var arr = file.toString('utf8').split('\n');

var check = function(check){
  var value = arr[check];
  it('should not match ' + value, function(done){
    duh().should.not.match(check);
    done();
  });
  it(value + ' should be a string', function(done){
    check.should.be.type('string');
    done();
  });
};

var i = '';
for(i in arr){
  check(i);
}



});