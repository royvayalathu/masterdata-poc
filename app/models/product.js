var mongoose = require('mongoose');

module.exports = mongoose.model('Product', {
    party: {
        type: String,
        default: ''
    },
	offerStatus: {
	    type: String,
	    default: ''
	},
	covers: {
	    type: String,
	    default: ''
	},
	id: {
	    type: String,
	    default: ''
	}
});