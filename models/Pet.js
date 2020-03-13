var express = require('express');
var mongoose = require('mongoos');


var Pet = new mongoose.Schema({
    name: { type: String, required: true },
    breed: { type: String, default: 'Not Available' },
    weight: { type: Number, default: 0 },
    notes: { type: String },
    createdAt: { type: Date, default: Date.now },
    
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    }

});


module.exports = mongoose.model('Pet', Pet);