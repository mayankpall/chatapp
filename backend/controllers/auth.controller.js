import  bcrypt  from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req ,res)=>{
  try{
    const {fullName ,username, password ,confirmPassword , gender }= req.body;

    if(password !== confirmPassword){
      return res.status(400).json({error: "password doesn't match"});
    }
    const user = await User.findOne({username});

    if(user){
      return res.status(400).json({error:"user already exists"});
    }

  //hash password here 
  const salt = await bcrypt.genSalt(10); //higher the value higher the hashing but take more time to hash
  const hashedPassword = await bcrypt.hash(password,salt);

  //api for profile pic
  const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
  const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

  //Creating a new user object
  const newUser = new User ({
    fullName,  //no need to write like fullName:fullName if have same name
    username,
    password:hashedPassword,
    gender,
    profilePic: gender === "male" ? boyProfilePic : girlProfilePic
  });

  if(newUser){
    //generate JWT token
    generateTokenAndSetCookie(newUser._id, res);

    await newUser.save(); //Saving the new user to the database

    //Sending a response back to the client:
    res.status(201).json({
      _id: newUser._id,
      fullName : newUser.fullName,
      username : newUser.username,
      profilePic:newUser.profilePic
  
    });
  }
  else {
    res.status(400).json({error: "Invalid User Data "})
  }

  }

 catch(error){
  console.log("Error in signup controller ", error.message);
  res.status(500).json({error: "Internal server Error"});
 }

};

export const login = (req ,res)=>{
  console.log("login page");
};
export const logout = (req ,res)=>{
  console.log("logout page");
};

