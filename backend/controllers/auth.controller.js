import User from "../models/user.model.js";

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
  
  const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
  const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

  //Creating a new user object
  const newUser = new User ({
    fullName,
    username,
    password,
    gender,
    profilePic: gender === "male" ? boyProfilePic : girlProfilePic
  });

  await newUser.save(); //Saving the new user to the database

  //Sending a response back to the client:
  res.status(201).json({
    _id: newUser._id,
    fullName : newUser.fullName,
    username : newUser.username,
    profilePic:newUser.profilePic

  });

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

