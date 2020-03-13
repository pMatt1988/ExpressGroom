var express = require('express');
var mongoose = require('mongoos');


var Client = new mongoose.Schema({
    name: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    email: { type: String },
    address: { type: String },
    notes: { type: String },
    createdAt: { type: Date, default: Date.now },


    pets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pet'
    }]

});


module.exports = mongoose.model('Client', Client);