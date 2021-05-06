const express = require("express")
const{ createPatient, getAllPatients, getSinglePatient, updatePatient, deletePatient } = require("../controllers/patientController")
const router = express.Router()
const guide = require("../middlewares/bearerToken")

router.route("/").post(guide,createPatient).get(guide,getAllPatients)
router.route("/:_id").get(guide, getSinglePatient).put(guide,updatePatient).delete(guide,deletePatient)

module.exports = router;
