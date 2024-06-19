import { hash } from "bcryptjs";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    watchHistory: [
        {
            type:mongoose.Schema.ObjectId,
            ref:"Video"
        }
    ],
    username: {
      type: String,
      require: true,
      unique: true,
      index:true,
      lowercase:true,
      min:[3 , "username should be min of 3"]
    },
    email: {
      type: String,
      require: true,
    },
    fullName: {
      type: String,
      require: true,
    },
    avatar: {
      type: String,
    },
    coverImage: {
      type: String,
    },
    password: {
      type: String,
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);
userSchema.pre("save" ,async function(next){
    if( this.isModified(this.password) === true ){
        this.password =  hash(this.password,10)
        next()
    }
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)

}
const User = new mongoose.model("User", userSchema);
