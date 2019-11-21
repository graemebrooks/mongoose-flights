# Mongoose Flights

![Flight Index Page](https://i.imgur.com/Q78Q5jZ.png)

![Flights Show View](https://i.imgur.com/kW7UhIP.png)

## Purpose

An exercise in producing a full stack CRUD application that utilizes a node/mongodb backend. Utilizes multiple schemas and demonstrates examples of document referencing and embedding.

## Data Structure

Schema for the flights themselves:

```const flightSchema = new Schema({
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
		default: function() {
			let d = new Date();
			let year = d.getFullYear();
			let month = d.getMonth();
			let day = d.getDate();
			let result = new Date(year + 1, month, day);
			return result;
		}
	},
	airport: {
		type: String,
		enum: [ 'AUS', 'DAL', 'LAX', 'SAN' ]
	},
	destinations: [ destinationSchema ]
});```

The embedded destination schema:

```const destinationSchema = new Schema({
	airport: {
		type: String,
		enum: [ 'AUS', 'DAL', 'LAX', 'SAN' ]
	},
	arrival: Date
});```

The Ticket Schema, which references the flight it's associated with:

```const ticketSchema = new Schema({
	seat: {
		type: String,
		match: /[A-F][1-9]\d?/
	},
	price: {
		type: Number,
		min: 0
	},
	flight: {
		type: Schema.Types.ObjectId,
		ref: 'Flight'
	}
});```



## Technologies Used

- HTML, CSS, JS
- Node, Express
- MongoDB, Mongoose