const mongoose = require('mongoose');

const entitySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'archived'],
        default: 'active',
    },
    image: {
        type: Buffer,
        required: true,
    },
    imageType: {
        type: String,
        required: true,
    },
    extraData: {
        type: Map,
        of: mongoose.Schema.Types.Mixed,
    },
});

const Entity = mongoose.model('Entity', entitySchema);

module.exports = Entity;
