const mongoose = require('mongoose');
const { Schema } = mongoose;
const { RequiredString } = require('../util/mongoose-helpers');

const schema = new Schema({
    albumId: [{
        type: Schema.Types.ObjectId,
        ref:'Album'
    }],
    title: RequiredString,
    description: RequiredString,
    url: RequiredString
});

module.exports = mongoose.model('Image', schema);