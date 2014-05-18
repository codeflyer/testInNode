var User = function User() {
    this.name = '';
    this.surname = '';
    this.email = '';
};

User.prototype.setName = function(name) {
    this.name = name;
};

User.prototype.setSurname = function(surname) {
    this.surname = surname;
};

User.prototype.setEmail = function(email) {
    this.email = email;
};

User.prototype.getName = function() {
    return this.name;
};

User.prototype.getSurname = function() {
    return this.surname;
};

User.prototype.getEmail = function() {
    return this.email;
};

module.exports = User;