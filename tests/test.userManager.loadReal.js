require('should');
var sinon = require('sinon');
var User = require('../models/user');
var UserDriver = require('../drivers/userDriver');
var UserManager = require('../services/userManager');
var Q = require('Q');
var MongoClient = require('mongodb').MongoClient;

describe('UserManager: real connection', function() {
    var _connection;
    before(function(done) {
        var dbName = "TestInNodeDb";
        fixtures = require('pow-mongodb-fixtures').connect(dbName);
        MongoClient.connect('mongodb://localhost/' + dbName, function(err, db) {
            if(err) {
                throw err;
            }
            _connection = db;
            UserDriver.setConnection(db);
            done();
        });
    });

    var sandbox;
    beforeEach(function(done) {
        sandbox = sinon.sandbox.create();
        fixtures.clear(function(err) {
            fixtures.load('./fixtures/users.js', done);
        });
    });

    afterEach(function() {
        sandbox.restore();
    });

    after(function(done) {
        _connection.close();
        done();
    });

    it('Load byId', function(done) {
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