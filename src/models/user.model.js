import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const userSchema = new Schema({
   username: {
     type: String,
     required: true,
     unique: true,
     lowercase: true,
     trim: true,
     index: true
   },
   email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
   },
   fullname: {
    type: String,
    required: true,
    trim: true,
    index: true
   },
   avater: {
    type: String,
    required: true,
   },
   coverimage: {
    type: String,
   },
   watchHistory: [
    {
      type: Schema.Types.ObjectId,
      ref: "Video"
    }
   ],
   password: {
    type: String,
    required: [true, "Password is required"]
   },
   refreshToken: {
    type: String,
   },
}, {timeseries: true})


export const User = mongoose.model("User",userSchema)