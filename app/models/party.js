var mongoose = require('mongoose');

module.exports = mongoose.model('Party', {
    firstName: {
        type: String,
        default: ''
    },
	lastName: {
	    type: String,
	    default: ''
	},
	dateOfBirth: {
	    type: String,
	    default: ''
	},
	gender: {
	    type: String,
	    default: ''
	},
	phone: {
	    type: String,
	    default: ''
	},
	mobile: {
	    type: String,
	    default: ''
	},
	email: {
	    type: String,
	    default: ''
	},
	photo: {
	    type: String,
	    default: ''
	},
	address: {
	    type: String,
	    default: ''
	},
	organization: {
	    type: String,
	    default: ''
	},
	relation: {
	    type: String,
	    default: ''
	}
});