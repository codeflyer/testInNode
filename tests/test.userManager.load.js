require('should');
var sinon = require('sinon');
var User = require('../models/user');
var UserDriver = require('../drivers/userDriver');
var UserManager = require('../services/userManager');
var Q = require('Q');
describe('UserManager', function(){
    it('Load byId', function(done) {
        var getUserByIdStub = sinon.stub(UserDriver, "getUserById");
        getUserByIdStub.returns((function(){
            var deferred = Q.defer();
            deferred.resolve({'name' : 'Davide', "surname" : "Fiorello", email : "davide@codeflyer.com"});
            return deferred.promise;
        })());
        UserManager.getUserById(1).then(
            function(user) {
                try {
                    user.should.be.instanceOf(User);
                    user.getName().should.be.equal('Davide');
                    user.getSurname().should.be.equal('Fiorello');
                    user.getEmail().should.be.equal('davide@codeflyer.com');
                    done();
                } catch(e) {
                    done(e);
                }
            },
            function(err) {
                done(err);
            }
        );
    });
});