var mongoose = require('mongoose');

var StationSchema = new mongoose.Schema({
	StopID: {type:String, required: true, unique: true},
	Name: {type:String, required: true, unique: true},
	EnterFare: {type:Number, default:0.0},
	ClosedStatus: {type:Boolean, default: false},
	IsTrain: {type:Boolean, default:false}
});

modue.exports = mongoose.model('StationSchema', StationSchema);
