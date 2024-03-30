import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connecttoMogodb.js";
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

dotenv.config(); //it should be called before process.env.PORT or other

const app = express();
const PORT= process.env.PORT || 2000 ; //.env is environmental varable take value from env or value

//middlewares 
app.use(express.json()); //to parse the incoming request with json payload(from req.body)
app.use(cookieParser()); //to get cookies in routes


app.use("/api/auth", authRoutes); // whenever page goes to something like /api/auth then authRouters will be called 
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

// app.get('/', (req,res)=>{
//   res.send("hii");
// })

app.listen(PORT, ()=>{
  connectToMongoDB();
  console.log(`hi working correctly ${PORT}`)
});
