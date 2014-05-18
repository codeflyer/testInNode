var User = require('../models/user');
var UserDriver = require('../drivers/userDriver');
var Q = require('Q');
var UserManager = (function() {
    return {
        "getUserById" : function(id) {
            var deferred = Q.defer();
            UserDriver.getUserById(id).then(
                function(userData) {
                    var user = new User();
                    user.setName(userData.name);
                    user.setSurname(userData.surname);
                    user.setEmail(userData.email);
                    deferred.resolve(user);
                },
                function(err) {
                    deferred.reject(err);
                }
            );
            return deferred.promise;
        }
    }
})();

module.exports = UserManager;