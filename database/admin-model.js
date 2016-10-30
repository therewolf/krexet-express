const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

var adminSchema = mongoose.Schema({
    local: {
        email: String,
        password: String
    }/*,
    facebook: {
        id: String,
        token: String,
        displayName: String,
        username
    }*/ // uncomment when/if facebook implementation
});

// METHODS

adminSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// passhash-check

adminSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('Admin', adminSchema);