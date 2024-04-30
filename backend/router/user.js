
import express from "express";
import { register, details } from "../controllers/user.js";

const router = express.Router();



router.post("/register", register);
router.get("/details", details);


export default router;