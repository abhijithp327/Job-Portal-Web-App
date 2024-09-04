import express from "express";
import { getCompanyById, getUserCompany, registerCompany, updateCompany } from "../controllers/companyController.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";


const router = express.Router();

// company routes 
// register company 
router.post("/register-company", isAuthenticated, registerCompany);
// update company by id
router.put("/update-company/:companyId", isAuthenticated, updateCompany);
// get user company
router.get("/user-company", isAuthenticated, getUserCompany);
// get company by id
router.get("/get-company/:companyId", isAuthenticated, getCompanyById);


export default router;