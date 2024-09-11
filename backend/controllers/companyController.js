import Joi from 'joi';
import getErrorsInArray from "../utils/getErrors.js";
import { joiOptions } from "../utils/joiOptions.js";
import Company from "../models/companyModel.js";
import getDataUri from '../utils/dataUri.js';
import cloudinary from '../utils/cloudinary.js';


export const registerCompany = async (req, res) => {
    try {

        const userId = req.user.userId;

        const { companyName } = req.body;

        const schema = Joi.object({
            companyName: Joi.string().required().label("Company Name")
        });


        const validate_data = {
            companyName
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

        const isCompanyExist = await Company.findOne({ name: companyName });

        if (isCompanyExist) {
            return res.status(400).json({
                status: 400,
                success: false,
                message: "Company already exist",
            });
        };

        const newCompany = await Company.create({
            name: companyName,
            userId
        });

        res.status(200).json({
            status: 200,
            success: true,
            message: "Company registered successfully",
            result: newCompany
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            success: false,
            message: "Failed to register company",
        });
    }
};


export const getUserCompany = async (req, res) => {
    try {

        const userId = req.user.userId;

        const company = await Company.find({ userId });

        res.status(200).json({
            status: 200,
            success: true,
            message: "Company found successfully",
            result: company
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            success: false,
            message: "Failed to get company",
            error: error
        });
    }
};


export const getCompanyById = async (req, res) => {
    try {

        const { companyId } = req.params;

        const company = await Company.findById(companyId);

        if (!company) {
            return res.status(400).json({
                status: 400,
                success: false,
                message: "Company not found",
            });
        };
        res.status(200).json({
            status: 200,
            success: true,
            message: "Company found successfully",
            result: company
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            success: false,
            message: "Failed to get company",
            error: error
        });
    }
};

export const updateCompany = async (req, res) => {

    try {

        const { companyId } = req.params;

        const { companyName, description, website, location } = req.body;

        const file = req.file;

        const fileUri = getDataUri(file);

        const cloudResponse = await cloudinary.uploader.upload(fileUri.content);

        const logo = cloudResponse.secure_url;

        const updatedCompany = await Company.findByIdAndUpdate(companyId, {
            name: companyName,
            description,
            website,
            location,
            logo
        }, {
            new: true
        });

        res.status(200).json({
            status: 200,
            success: true,
            message: "Company updated successfully",
            result: updatedCompany
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            success: false,
            message: "Failed to update company",
            error: error
        });
    }
};


export const getAllCompanies = async (req, res) => {
    try {
        const companies = await Company.find();
        res.status(200).json({
            status: 200,
            success: true,
            message: "Companies found successfully",
            result: companies
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            success: false,
            message: "Failed to get companies",
            error: error
        });
    }
};