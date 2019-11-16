var mongoose = require('mongoose');
var Schema = mongoose.Schema;

function addOneYear() {
	let d = new Date();
	let year = d.getFullYear();
	let month = d.getMonth();
	let day = d.getDate();
	let result = new Date(year + 1, month, day);
}

var flightSchema = new Schema({
	airline: {
		type: String,
		enum: [ 'American', 'Southwest', 'United' ]
	},
	flightNo: {
		type: Number,
		min: 10,
		max: 9999
	},
	departs: {
		type: Date,
		default: addOneYear()
	}
});
