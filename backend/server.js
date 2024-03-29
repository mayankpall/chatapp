import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connecttoMogodb.js";

dotenv.config(); //it should be called before process.env.PORT or other

const app = express();
const PORT= process.env.PORT || 2000 ; //.env is environmental varable take value from env or value



//middlewares 
app.use(express.json()); //to parse the incoming request with json payload(from req.body)
app.use("/api/auth", authRoutes); // whenever page goes to something like /api/auth then authRouters will be called 


// app.get('/', (req,res)=>{
//   res.send("hii");
// })


app.listen(PORT, ()=>{
  connectToMongoDB();
  console.log(`hi working correctly ${PORT}`)
});
