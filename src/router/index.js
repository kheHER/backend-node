
import express from "express";
import Usercontroller from "../controller/user.controller.js";
const router = express.Router();

router.post('/user/register', Usercontroller.register);
export default router;
