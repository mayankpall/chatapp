import  Express  from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = Express.Router();

router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout);



export default router; //It exports the router instance as the default export, allowing it to be imported and used in other parts of the application.