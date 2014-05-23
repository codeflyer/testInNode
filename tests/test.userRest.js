var Client = require('node-rest-client').Client;

describe('User Rest Request', function() {
    before(function() {
        var dbName = "TestInNodeDb";
        fixtures = require('pow-mongodb-fixtures').connect(dbName);
    });

    beforeEach(function(done) {
        fixtures.clear(function(err) {
            fixtures.load('./fixtures/users.js', done);
        });
    });

    it('Load byId (not exists)', function(done) {
        var client = new Client();
        var args = {
            headers : {"Content-Type" : "application/json"}
        };
        client.get("http://127.0.0.1:3000/user/10", args, function(data, response) {
                data.result.should.be.equal(1);
                data.message.should.be.equal('User not found');
                done();
            }
        );
    });

    it('Load byId', function(done) {
        var client = new Client();
        var args = {
            headers : {"Content-Type" : "application/json"}
        };
        client.get("http://127.0.0.1:3000/user/1", args, function(data, response) {
                data.name.should.be.equal('Davide');
                data.surname.should.be.equal('Fiorello');
                data.email.should.be.equal('davide@codeflyer.com');
                done();
            }
        );
    });
});