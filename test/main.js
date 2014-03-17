var duh = require('../');
var should = require('should');
require('mocha');

describe('duh', function() {
  describe('duh() without args', function() {
    it('should tell you how dumb it is', function(done) {
      should.exist(duh());
      done();
    });
    it('should be duh', function(done){
      String(duh()).should.equal("duh");
      done();
    });
    it('should not be anything but duh', function(done){
      String(duh()).should.not.equal('clever');
      done();
    });

    describe('duh() type', function(){
      it('should be a string', function(done){
        duh().should.be.type('string');
        done();
      });
      it('should not be a object', function(done){
        duh().should.not.be.type('object');
        done();
      });
      it('should not be a number', function(done){
        duh().should.not.be.type('number');
        done();
      });
      it('should not be a array', function(done){
        duh().should.not.be.type('array');
        done();
      });
    });

  });

  describe('duh() with args "dumb"', function(){

    it('should tell you how dumb you are', function(done) {
      should.exist(duh());
      done();
    });
    it('should be duh dummy', function(done){
      String(duh('dumb')).should.equal("duh dumb");
      done();
    });
    it('should not be anything but duh', function(done){
      String(duh('dumb')).should.not.equal('clever fox');
      done();
    });

    describe('duh() type with arg dumb', function(){
      it('should be a string', function(done){
        duh('dumb').should.be.type('string');
        done();
      });
      it('should not be a object', function(done){
        duh('dumb').should.not.be.type('object');
        done();
      });
      it('should not be a number', function(done){
        duh('dumb').should.not.be.type('number');
        done();
      });
      it('should not be a array', function(done){
        duh('dumb').should.not.be.type('array');
        done();
      });
    });


  });

  describe('duh() with args "doge"', function(){
    it('should tell you how dumb the doge is', function(done) {
      should.exist(duh());
      done();
    });
    it('should be duh doge', function(done){
      String(duh('doge')).should.equal("duh doge");
      done();
    });
    it('should not be anything but duh', function(done){
      String(duh('doge')).should.not.equal('clever dog');
      done();
    });
    describe('duh() type with arg doge', function(){
      it('should be a string', function(done){
        duh('doge').should.be.type('string');
        done();
      });
      it('should not be a object', function(done){
        duh('doge').should.not.be.type('object');
        done();
      });
      it('should not be a number', function(done){
        duh('doge').should.not.be.type('number');
        done();
      });
      it('should not be a array', function(done){
        duh('doge').should.not.be.type('array');
        done();
      });
    });


  });
  describe('duh() with args "troll"', function(){
    it('should tell you how it is trolling', function(done) {
      should.exist(duh());
      done();
    });
    it('should be duh troll', function(done){
      String(duh('troll')).should.equal("duh troll");
      done();
    });
    it('should not be anything but duh', function(done){
      String(duh('troll')).should.not.equal('clever frog');
      done();
    });
    describe('duh() type with arg troll', function(){
      it('should be a string', function(done){
        duh('troll').should.be.type('string');
        done();
      });
      it('should not be a object', function(done){
        duh('troll').should.not.be.type('object');
        done();
      });
      it('should not be a number', function(done){
        duh('troll').should.not.be.type('number');
        done();
      });
      it('should not be a array', function(done){
        duh('troll').should.not.be.type('array');
        done();
      });
    });


  });
});
