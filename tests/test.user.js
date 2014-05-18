require('should');
var User = require('../models/user');
describe('User', function(){
    it('Create instance', function() {
        var user = new User();
        user.name.should.be.equal('');
        user.surname.should.be.equal('');
        user.email.should.be.equal('');
    });

    it('Set values', function() {
        var user = new User();
        user.setName('Davide');
        user.setSurname('Fiorello');
        user.setEmail('davide@codeflyer.com');

        user.name.should.be.equal('Davide');
        user.surname.should.be.equal('Fiorello');
        user.email.should.be.equal('davide@codeflyer.com');
    });

    it('Get values', function() {
        var user = new User();
        user.name = 'Davide';
        user.surname = 'Fiorello';
        user.email = 'davide@codeflyer.com';
        user.getName().should.be.equal('Davide');
        user.getSurname().should.be.equal('Fiorello');
        user.getEmail().should.be.equal('davide@codeflyer.com');
    });
});