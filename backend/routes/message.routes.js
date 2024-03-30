import  express  from "express";
import { sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/send/:id",protectRoute, sendMessage); // only loggedin user should sent msg we can do this with protectRouter, we have created it in middleware folder

export default router;
