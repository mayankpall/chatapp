import cookieParser from "cookie-parser";
import  jwt  from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res)=>{
  const token = jwt.sign({userId},process.env.JWT_SECRET, {
    expiresIn: "15d",
  })

  res.cookie("jwt",token,{
    maxAge: 15 * 24 * 60 * 60 * 1000, //15days
    httpOnly: true,
    sameSite:"strict",
    secure: process.env.NODE_ENV !== "developnment", //set .env file NODE_ENV="developnment"
  })

};

export default generateTokenAndSetCookie;