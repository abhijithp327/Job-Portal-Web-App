import Joi from 'joi';
import { joiOptions } from '../utils/joiOptions.js';
import getErrorsInArray from '../utils/getErrors.js';
import Job from '../models/jobModel.js';

export const postJob = async (req, res) => {
    try {

        const userId = req.user.userId;

        const { title, description, position, experience, requirements, companyId, jobType, location, salary } = req.body;

        const schema = Joi.object({
            title: Joi.string().required().label("Title"),
            description: Joi.string().required().label("Description"),
            position: Joi.number().required().label("Position"),
            experience: Joi.number().required().label("Experience"),
            requirements: Joi.array().items(Joi.string().required()).required().label("Requirements"),
            companyId: Joi.string().required().label("Company"),
            jobType: Joi.string().required().label("Job Type"),
            location: Joi.string().required().label("Location"),
            salary: Joi.number().required().label("Salary"),
        });


        const validate_data = {
            title,
            description,
            position,
            experience,
            requirements,
            companyId,
            jobType,
            location,
            salary
        };

        const { error } = schema.validate(validate_data, joiOptions);
        if (error) {
            return res.status(500).json({
                status: 500,
                success: false,
                message: "Validation Error",
                error: getErrorsInArray(error?.details),
            });
        };

        const newJob = await Job.create({
            title,
            description,
            position,
            experienceLevel: experience,
            requirements,
            company: companyId,
            jobType,
            location,
            salary: Number(salary),
            created_by: userId
        });

        return res.status(200).json({
            status: 200,
            success: true,
            message: "Job created successfully",
            result: newJob
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 500,
            success: false,
            message: "Failed to post job",
            error: error
        });
    }
};


export const getAllJobs = async (req, res) => {
    try {

        const { search = "" } = req.query;

        // Build the query only if search is provided
        let query = {};
        if (search) {
            query = {
                $or: [
                    { title: { $regex: search, $options: "i" } },
                    { description: { $regex: search, $options: "i" } },
                ]
            };
        }


        const jobs = await Job.find(query).populate({
            path: "company",
        }).sort({ createdAt: -1 });

        if (!jobs) {
            return res.status(400).json({
                status: 400,
                success: false,
                message: "No jobs found",
            });
        };

        res.status(200).json({
            status: 200,
            success: true,
            message: "Jobs found successfully",
            result: jobs
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            success: false,
            message: "Failed to get jobs",
            error: error
        });
    }
};


export const getJobById = async (req, res) => {
    try {

        const { jobId } = req.params;

        const job = await Job.findById(jobId);

        if (!job) {
            return res.status(400).json({
                status: 400,
                success: false,
                message: "Job not found",
            });
        };

        res.status(200).json({
            status: 200,
            success: true,
            message: "Job found successfully",
            result: job
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            success: false,
            message: "Failed to get job",
            error: error
        });
    }
};


export const getJobsByAdmin = async (req, res) => {

    try {

        const adminId = req.user.userId;

        const jobs = await Job.find({ created_by: adminId });

        if (!jobs) {
            return res.status(400).json({
                status: 400,
                success: false,
                message: "No jobs found",
            });
        };

        res.status(200).json({
            status: 200,
            success: true,
            message: "Jobs found successfully",
            result: jobs
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            success: false,
            message: "Failed to get jobs",
            error: error
        });
    }
};
