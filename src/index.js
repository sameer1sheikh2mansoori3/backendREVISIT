import dotenv from "dotenv"
dotenv.config({
    path:"../.env"
})
import app from "./app.js"
import dbConnect from "./db/db.js"



dbConnect()

const port = process.env.PORT || 4500
app.listen(port , ()=>{
   console.log(process.env.MONGODB_URL)
    console.log(`our server is running on ${port}`)
})