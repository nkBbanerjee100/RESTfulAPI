// for schema
const express = require("express")
const app = express();
const mongoose = require("mongoose")
const mensSchema = new mongoose.Schema({
    event: {
        type: String,
        default : "100M"
    },
    ranking: {
        type: Number,
        required : true,
        unique: true
    },
    name: {
        type: String,
        required: [true, "please enter  a name"],
        trim : true,
        minlength: 3,
        maxlength: 20,
    },
    dob: {
        type: Date,
        default: new Date(),
        required: true
    },
    country: {
        type: String,
        required: [true, "please enter your country name"]
    },
    score: {
        type: Number,
        required: [true, "enter the score please"]
    }
})
const MenCollection = new mongoose.model("MenCollection",mensSchema)
module.exports = MenCollection