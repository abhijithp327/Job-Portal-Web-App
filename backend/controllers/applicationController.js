import Application from "../models/applicationModel.js";
import Job from "../models/jobModel.js";

export const applyJob = async (req, res) => {

    try {

        const userId = req.user.userId;

        const jobId = req.params.jobId;

        if (!jobId) {
            return res.status(400).json({
                status: 400,
                success: false,
                message: "Job required"
            });
        }

        const existingJobApplication = await Application.findOne({ job: jobId, applicant: userId });
        if (existingJobApplication) {
            return res.status(400).json({
                status: 400,
                success: false,
                message: "Already applied for this job"
            });
        };

        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({
                status: 404,
                success: false,
                message: "Job not found"
            });
        };

        const newApplication = await Application.create({
            applicant: userId,
            job: jobId
        });

        job.applications.push(newApplication._id);
        await job.save();

        res.status(200).json({
            status: 200,
            success: true,
            message: "Job applied successfully",
            result: newApplication
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            success: false,
            message: "Failed to apply job",
            error: error
        });
    }
};


export const getAppliedJobs = async (req, res) => {

    try {

        const userId = req.user.userId;

        const applications = await Application.find({ applicant: userId }).sort({ createdAt: -1 }).populate({
            path: "job",
            options: { sort: { createdAt: -1 } },
            populate: {
                path: "company",
                options: { sort: { createdAt: -1 } },
            }
        });

        if (!applications) {
            return res.status(404).json({
                status: 404,
                success: false,
                message: "No applications found"
            });
        };

        res.status(200).json({
            status: 200,
            success: true,
            message: "Applied jobs found successfully",
            result: applications
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            success: false,
            message: "Failed to get applied jobs",
            error: error
        });
    }
};


export const getApplicant = async (req, res) => {
    try {

        const jobId = req.params.jobId;

        const job = await Job.findById(jobId).populate({
            path: "applications",
            options: { sort: { createdAt: -1 } },
            populate: {
                path: "applicant"
            }
        });
        if (!job) {
            res.status(404).json({
                status: 404,
                success: false,
                message: "No job found",
            });
        };

        res.status(200).json({
            status: 200,
            success: true,
            message: "Applicant found successfully",
            result: job
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            success: false,
            message: "Failed to get applicant",
            error: error
        });
    }
};


export const updateStatus = async (req, res) => {
    
    try {

        const { status } = req.body;
        console.log(status);

        const applicationId = req.params.applicationId;

        if (!status) {
            return res.status(400).json({
                status: 400,
                success: false,
                message: "Status required"
            });
        }

        const application = await Application.findById({ _id: applicationId });
        if (!application) {
            return res.status(404).json({
                status: 404,
                success: false,
                message: "Application not found"
            });
        };

        const updateApplication = await Application.findByIdAndUpdate({
            _id: applicationId
        },
            { status },
            { new: true }
        );

        res.status(200).json({
            status: 200,
            success: true,
            message: "Status updated successfully",
            result: updateApplication
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            success: false,
            message: "Failed to update status",
            error: error
        });
    }
};