var UserManager = require('../services/userManager');

/* GET user data. */
var userController = function(req, res) {
    var id = parseInt(req.params.id);
    UserManager.getUserById(id).then(
        function(user) {
            if(user == null) {
                res.json({'result' : 1, "message" : 'User not found'});
            } else {
                var userData = {
                    name : user.getName(),
                    surname : user.getSurname(),
                    email : user.getEmail()
                };

                res.json(userData);
            }
        },
        function(err) {
            res.json({'result' : 100, "message" : 'Error: ' + err});
        }
    );
};

module.exports = userController;
