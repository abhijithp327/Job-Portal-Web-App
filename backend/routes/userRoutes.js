import express from "express";
import { login, logout, register, updateProfile } from "../controllers/userController.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

// user routes 
// register user 
router.post("/register", singleUpload, register);
// login user
router.post("/login", singleUpload, login);
// update user profile
router.put("/update-profile", isAuthenticated, singleUpload, updateProfile);
// logout user
router.get("/logout", isAuthenticated, logout);

export default router;

