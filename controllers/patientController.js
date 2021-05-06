const Patient = require("../models/patientSchema")

//adding new patient
const createPatient = async (req,res) => {
    const newPatient = new Patient({
        name: req.body.name,  
        gender: req.body.gender,
        age: req.body.age,
        time: req.body.time,
        date: req.body.date,
        weight: req.body.weight,
        contact: req.body.contact,
        email: req.body.email,
    });

    await newPatient.save()
    res.status(201).json(newPatient);
}
//get all patient
const getAllPatients = async (req,res) => {
    const patient = await Patient.find()
    res.json(patient)
}
//get a patient
const getSinglePatient = async (req,res) => {
    const Patient = await Patient.findById(req.params._id)
    res.json(patient)
}
//update a patient
const updatePatient =async (req, res) =>{
    const foundPatient = await Patient.findById(req.params._id)
    if (foundPatient) {
        (foundPatient.name = req.body.name),
        (foundPatient.gender = req.body.gender),
        (foundPatient.age = req.body.age),
        (foundPatient.time = req.body.time),
        (foundPatient.date = req.body.date),
        (foundPatient.weight = req.body.weight),
        (foundPatient.contact = req.body.contact)
        (foundPatient.email = req.body.email)
        
        const updatedPatient = await foundPatient.save()
        res.json({updatedPatient})
    }
}

// delete a patient
const deletePatient = async (req,res) => {
    const foundPatient = await Patient.findById(req.params._id)
    if (foundPatient) {
        foundPatient.remove()
        res.json((`msg: ${foundPatient.name} removed`))
    } else {
        res.status(404).json({error: "Patient not found"})
    }
}

module.exports = {createPatient, getAllPatients, getSinglePatient, updatePatient, deletePatient};