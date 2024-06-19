import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))  // ye cors problem solve krta hai

app.use(express.json({limit: "16kb"}))  // json data lene k liye
app.use(express.urlencoded({extended: true, limit: "16kb"})) // url backchodi
app.use(express.static("public"))  //public folder 
app.use(cookieParser())  //cookie-parser




export default app;