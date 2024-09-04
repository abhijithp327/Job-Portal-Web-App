import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const isAuthenticated = async (req, res, next) => {
    try {

        const token = req.cookies?.token;
        if (!token) {
            return res.status(401).json({
                status: 401,
                success: false,
                message: "User is not authorized",
            });
        }

        const decode = await jwt.verify(token, process.env.JWT_SECRET);
        if (!decode) {
            return res.status(401).json({
                status: 401,
                success: false,
                message: "Invalid token",
            });
        }
        req.user = decode;
        next();
    } catch (error) {

    }
};

export default isAuthenticated;