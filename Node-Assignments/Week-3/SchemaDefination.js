//  Note:
// This is just a sample schema that we can create using mongoose,

const mongoose = require('mongoose');

// Movie Schema
const movieSchema = new mongoose.Schema({
	title: String,
	releaseYear: Number,
	genre: String,
	director: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Director',
	},
	actors: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Actor',
		},
	],
});

const Movie = mongoose.model('Movie', movieSchema);

//  Actor Schema
const actorSchema = new mongoose.Schema({
	name: String,
	nationality: String,
	moviesActedIn: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Movie',
		},
	],
});

const Actor = mongoose.model('Actor', actorSchema);

// Director Schema
const directorSchema = new mongoose.Schema({
	name: String,
	nationality: String,
	moviesDirected: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Movie',
		},
	],
});

const Director = mongoose.model('Director', directorSchema);
