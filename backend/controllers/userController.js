import Joi from 'joi';
import bcrypt from 'bcryptjs';
import getErrorsInArray from '../utils/getErrors.js';
import User from '../models/userModel.js';
import { joiOptions } from '../utils/joiOptions.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const register = async (req, res) => {

    try {

        const { fullname, email, phoneNumber, password, role } = req.body;

        // Register user validation 
        const schema = Joi.object({
            fullname: Joi.string().required().label("FullName"),
            email: Joi.string().required().label("Email"),
            phoneNumber: Joi.string().required().label("Phone Number"),
            password: Joi.string().required().label("Password"),
            role: Joi.string().label("Role"),
        });

        // Register validation data

        const validate_data = {
            fullname,
            email,
            phoneNumber,
            password,
            role
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

        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({
                status: 400,
                success: false,
                message: "User already exists with this email",
            });
        };

        const hashPassword = await bcrypt.hash(password, 10);

        await User.create({
            fullname,
            email,
            phoneNumber,
            role,
            password: hashPassword,
        });

        res.status(200).json({
            status: 200,
            success: true,
            message: "User created successfully",
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            success: false,
            message: "Failed to register user",
            error: error
        });
    }

};


export const login = async (req, res) => {
    try {

        const { email, password, role } = req.body;

        const schema = Joi.object({
            email: Joi.string().required().label("Email"),
            password: Joi.string().required().label("Password"),
            role: Joi.string().required().label("Role"),
        });


        const validate_data = {
            email,
            password,
            role
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

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                status: 400,
                success: false,
                message: "User not found",
            });
        };

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                status: 400,
                success: false,
                message: "Invalid credentials",
            });
        };

        if (role !== user.role) {
            return res.status(400).json({
                status: 400,
                success: false,
                message: "Account does not exist with this role",
            });
        };

        const tokenData = {
            userId: user._id,
            email: user.email,
            role: user.role
        };

        const token = jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.status(200).cookie('token', token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'strict' }).json({
            status: 200,
            success: true,
            message: "User logged in successfully",
            result: {
                token: token,
                user: {
                    userId: user._id,
                    fullname: user.fullname,
                    email: user.email,
                    phoneNumber: user.phoneNumber,
                    role: user.role,
                    profile: user.profile
                }
            }
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            success: false,
            message: "Failed to login",
            error: error
        });
    }
};


export const logout = async (req, res) => {

    try {

        res.status(200).cookie('token', '', { maxAge: 0 }).json({
            status: 200,
            success: true,
            message: "User logged out successfully",
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            success: false,
            message: "Failed to logout",
            error: error
        });
    }

};

export const updateProfile = async (req, res) => {

    try {

        const userId = req.user.userId;

        const { fullname, email, phoneNumber, bio, skills } = req.body;

        let skillsArray

        if (skills) {
            skillsArray = skills.split(',');
        };

        // console.log(req.body);

        const user = await User.findById(userId);

        if (!user) {
            return res.status(400).json({
                status: 400,
                success: false,
                message: "User not found",
            });
        }

        const updatedUser = await User.findByIdAndUpdate(user._id, {
            fullname,
            email,
            phoneNumber,
            "profile.bio": bio,
            "profile.skills": skillsArray,
        }, {
            new: true,
            select: '-password'
        });

        res.status(200).json({
            status: 200,
            success: true,
            message: "User profile updated successfully",
            result: updatedUser
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            success: false,
            message: "Failed to update profile",
        });
    }
};