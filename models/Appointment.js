var express = require('express');
var mongoose = require('mongoos');


var Appointment = new mongoose.Schema({
    date: { type: Date },
    notes: { type: String },
    createdAt: { type: Date, default: Date.now },


    pet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pet'
    }

});


module.exports = mongoose.model('Client', Client);