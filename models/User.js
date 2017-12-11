var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	UserName: {type:String, required: true, unique: true},
	Password: {type:String, required: true},
	IsAdmin: {type:Boolean},
});

modue.exports = mongoose.model('UserSchema', UserSchema);