import express from "express";
import { login, logout, register, updateProfile } from "../controllers/userController.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

// user routes 
// register user 
router.post("/register", register);
// login user
router.post("/login", login);
// update user profile
router.put("/update-profile", isAuthenticated, updateProfile);
// logout user
router.get("/logout", isAuthenticated, logout);

export default router;

