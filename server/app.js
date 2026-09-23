const express=require("express")
const connectDB = require("./config/db")
const dotenv=require("dotenv")
const dns=require("dns")
const courseRoute = require("./routes/courseRoutes")
const authRoute=require("./routes/authRoutes")
const app=express()


dotenv.config()
app.use(express.json())
dns.setServers(["1.1.1.1","8.8.8.8"])
app.use("/api/auth",authRoute)
app.use("/api/courses",courseRoute)


connectDB()
app.listen(3000,()=>{
    console.log("Listening to the port")
})