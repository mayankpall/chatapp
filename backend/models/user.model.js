import mongoose from "mongoose";

//creating user model
const userSchema = new mongoose.Schema({
  fullName:{
    type:String,
    required:true
  },
  username:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true,
    minlength:6
  },
  gender:{
    type:String,
    required:true,
    enum:["male","female"],
  },
  profilePic:{
    type:String,
    default:""
  }
} , {timestamps:true}//to use createdAt, updatedAt  => can use as member since <createdAt>
  );


const User = mongoose.model("User",userSchema); //creates a Mongoose model named "User" based on the userSchema defined earlier.

export default User;