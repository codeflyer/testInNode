require('should');
var Q = require('Q');
var MongoClient = require('mongodb').MongoClient;
var httpMocks = require('node-mocks-http');
var userCtrl = require('../controllers/userCtrl');
var UserDriver = require('../drivers/userDriver');


describe('User controller', function() {
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

    beforeEach(function(done) {
        fixtures.clear(function(err) {
            fixtures.load('./fixtures/users.js', done);
        });
    });

    afterEach(function() {
    });

    after(function(done) {
        _connection.close();
        done();
    });

    it('Load byId', function(done) {
        var request = httpMocks.createRequest({
            method : 'GET',
            params : {
                id : 1
            }
        });
        var response = httpMocks.createResponse();
        response.json = function(struct) {
            try {
                var expected = {
                    "email" : "davide@codeflyer.com",
                    "name" : "Davide",
                    "surname" : "Fiorello"}
                expected.should.eql(struct);
                done();
            } catch(e) {
                done(e);
            }
        };

        userCtrl(request, response);
    });

    it('Load byId (not exists)', function(done) {
        var request = httpMocks.createRequest({
            method : 'GET',
            params : {
                id : 2
            }
        });
        var response = httpMocks.createResponse();
        response.json = function(struct) {
            try {
                var expected = {
                    "message" : "User not found",
                    "result" : 1};
                expected.should.eql(struct);
                done();
            } catch(e) {
                done(e);
            }
        };

        userCtrl(request, response);
    });
});