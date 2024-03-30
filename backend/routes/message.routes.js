import  express  from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/:id",protectRoute, getMessages);
router.post("/send/:id",protectRoute, sendMessage); // only loggedin user should sent msg we can do this with protectRouter, we have created it in middleware folder

export default router;
