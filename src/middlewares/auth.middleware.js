import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model";


export const verifyJWT = asyncHandler(async (req, res, next) => {
    req.cookies?.accessToken || req.header("Authorization")?.re[localStorage("Bearer", "")]

    if (!token) {
        throw new ApiError(401, "Unauthorized request")
    }

    //verify method is used to verify the access key.
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

    const user = await User.findById(decodedToken?._id)
        .select("-password -refreshToken");

    if (!user) {
        throw new ApiError(401, "Invalid Access Token")
    }

})