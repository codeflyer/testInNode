var User = require('../models/user');
var Q = require('Q');
var UserManager = (function() {
    return {
        "getUserById" : function(id) {
            var deferred = Q.defer();
            var user = new User();
            user.setName('Davide');
            user.setSurname('Fiorello');
            user.setEmail('davide@codeflyer.com');
            deferred.resolve(user);
            return deferred.promise;
        }
    }
})();

module.exports = UserManager;