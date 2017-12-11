var mongoose = require('mongoose');

var ConflictSchema = new mongoose.Schema({
	UserName: {type:String, required: true},
	CardNumber: {type:String, required: true},
	SuspendedTime: {type:Date, required:true}
});

modue.exports = mongoose.model('ConflictSchema', ConflictSchema);