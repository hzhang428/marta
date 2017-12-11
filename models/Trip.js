var mongoose = require('mongoose');

var TripSchema = new mongoose.Schema({
	CardNumber: {type:String, required: true},
	StartTime: {type:Date, required: true},
	StartAt: {type:String, required:true},
	EndAt: {type:String, required:true},
	TripFare: {type:Number, required:true}
});

modue.exports = mongoose.model('TripSchema', TripSchema);