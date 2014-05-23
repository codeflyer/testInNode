var sinon = require('sinon');
var User = require('../models/user');
var UserDriver = require('../drivers/userDriver');
var UserManager = require('../services/userManager');
var Q = require('Q');
describe('UserManager', function() {
    var sandbox;
    beforeEach(function() {
        sandbox = sinon.sandbox.create();
    });

    afterEach(function() {
        sandbox.restore();
    });

    it('Load byId', function(done) {
        var getUserByIdStub = sandbox.stub(UserDriver, "getUserById");
        getUserByIdStub.returns((function() {
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

    it('Load byId, user not exists', function(done) {
        var getUserByIdStub = sandbox.stub(UserDriver, "getUserById");
        getUserByIdStub.returns((function() {
            var deferred = Q.defer();
            deferred.resolve(null);
            return deferred.promise;
        })());

        UserManager.getUserById(2).then(
            function(user) {
                try {
                    (user == null).should.be.true;
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