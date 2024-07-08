// import mongoose from 'mongoose';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NotesSchema = new Schema({
user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
},
title:{
    type: String,
    required: true
},
description: {
    required: true,
    type: String
},
tag: {
    type: String,
    default: 'general'
},
date: {
    type: Date,
    default: Date.now
}
});

module.exports = mongoose.model('Notes', NotesSchema);