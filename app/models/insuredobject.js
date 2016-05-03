var mongoose = require('mongoose');

module.exports = mongoose.model('Product', {
    id: {
        type: String,
        default: ''
    },
	description: {
	    type: String,
	    default: ''
	},
	keywords: {
	    type: String,
	    default: ''
	},
	product: {
	    type: String,
	    default: ''
	},
	customer: {
	    type: String,
	    default: ''
	}
});