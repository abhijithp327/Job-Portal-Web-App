import express from "express";
import { getAllCompanies, getCompanyById, getUserCompany, registerCompany, updateCompany } from "../controllers/companyController.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/multer.js";


const router = express.Router();

// company routes 
// register company 
router.post("/register-company", isAuthenticated, registerCompany);
// update company by id
router.put("/update-company/:companyId", isAuthenticated, singleUpload, updateCompany);
// get user company
router.get("/user-company", isAuthenticated, getUserCompany);
// get company by id
router.get("/get-company/:companyId", isAuthenticated, getCompanyById);
// get all companies
router.get("/get-all-companies",  getAllCompanies);


export default router;