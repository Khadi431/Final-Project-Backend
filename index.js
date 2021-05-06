const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/connectDB");
const patientRoute = require("./routes/patientsRoute");
const doctorsRoute = require ("./routes/doctorsRoute");


dotenv.config()

const app = express()

//connection
connectDB();

//middlewares
app.use(express.json())
app.use(morgan("dev"))

//routes
app.use("/api/v9/patients", patientRoute);
app.use("/api/v9/doctor", doctorsRoute);


//home route
app.get("/", (req,res)=> {
    res.send("<h1>welcome to my first patients api</h1>")
})

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`server started on port ${port}`))