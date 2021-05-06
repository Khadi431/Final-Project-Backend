const mongoose = require("mongoose")

const patientSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    time: {
        type: String
    },
    
    date:{
        type: String,
        required: true
    },
    weight:{
        type: String,     
        required: true
    },
    contact:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    
    

    

}, {
    timestamps: true,
});


const Patient = mongoose.model("patient", patientSchema)
module.exports = Patient;
