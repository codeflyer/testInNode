require('should');
var User = require('../models/user');
var UserManager = require('../services/userManager');
describe('UserManager', function(){
    it('Load byId', function(done) {
        UserManager.getUserById(1).then(
            function(user) {
                try {
                    user.should.be.instanceOf(User);
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