var Q = require('Q');
var UserDriver = (function() {
    var _collectionName = 'users';
    var _connection;
    return {
        setConnection : function(connection) {
            _connection = connection;
        },

        getUserById : function(id) {
            var deferred = Q.defer();
            _connection.collection(_collectionName).findOne({'_id' : id}, function(err, doc) {
                if(err) {
                    return deferred.reject(err);
                }
                deferred.resolve(doc);
            });
            return deferred.promise;
        }
    }
})();
module.exports = UserDriver;