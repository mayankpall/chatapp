import express from "express";
const app = express();
 
import authRoutes from "./routes/auth.routes.js";
 
import dotenv from "dotenv";
dotenv.config();

const PORT= process.env.PORT || 2000; //.env is environmental varable take value from env or value


app.get('/', (req,res)=>{
  res.send("hii");
})

app.use("/api/auth", authRoutes); // whenever page goes to something like /api/auth then authRouters will be called 

app.listen(PORT, ()=>
  console.log(`hi working correctly ${PORT}`)
);
