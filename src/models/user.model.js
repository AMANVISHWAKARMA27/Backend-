import mongoose, { Schema } from "mongoose" //import mongoose t perform data modelling.
//import Schema to create schemas.
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

//Below is the code for writing database queries for mongoDB.
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        fullname: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            index: true
        },
        avatar: {
            type: String,//cloudinary url
            required: true,
        },
        coverImage: {
            type: String
        },
        watchHistory: [
            {
                /*When we want to establish a realtion between two 
                schemas or fileds in mongoo db, we can write in the below method.
                
                The type method remains the smae and ref is compulsory after that.*/
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
            //The above one is an array 
        ],
        password: {
            type: String,
            required: [true, "Password is required!"]
        },
        refreshToken: {
            type: String
        }
    }
    , { timestamps: true }
    //timestamps provide us with two datas- updatedAt and createdAT
)

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function
    (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,

        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_SECRET
        }
    )
}

export const User = mongoose.model("User", userSchema)