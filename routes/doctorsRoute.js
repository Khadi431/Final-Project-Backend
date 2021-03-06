const express = require("express")
const { addUser, userLogin } = require("../controllers/doctorController")

const router = express.Router()

router.route("/signup").post(addUser)
router.route("/signin").post(userLogin)

module.exports = router;