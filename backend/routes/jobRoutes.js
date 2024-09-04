import express from "express";
import { getAllJobs, getJobById, getJobsByAdmin, postJob } from "../controllers/jobController.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";


const router = express.Router();

// jobs routes 
// post job
router.post("/post-job", isAuthenticated, postJob);
// get all jobs
router.get("/get-all-jobs", isAuthenticated, getAllJobs);
// get job by id 
router.get("/get-job/:jobId", isAuthenticated, getJobById);

// admin 
// get all for admin 
router.get("/get-admin-jobs", isAuthenticated, getJobsByAdmin);


export default router;