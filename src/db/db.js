import mongoose from "mongoose";
import  DB_NAME from "../constant.js";
const dbConnect = async()=>{
    
    try {
      const res = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
      
      console.log(res.connection.host)
    } catch (error) {
        console.log(`error while entering the ${error}`)
    }
}

export default dbConnect;