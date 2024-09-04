import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { applyJob, getApplicant, getAppliedJobs, updateStatus } from "../controllers/applicationController.js";


const router = express.Router();

// application routes

// apply job
router.post("/apply-job/:jobId", isAuthenticated, applyJob);

// get applied jobs
router.get("/get-applied-jobs", isAuthenticated, getAppliedJobs);

// get applicant
router.get("/get-applicant/:jobId", isAuthenticated, getApplicant);

// update application status 
router.put("/update-status/:applicationId", isAuthenticated, updateStatus);



export default router;