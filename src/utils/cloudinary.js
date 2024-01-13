import { v2 as cloudinary } from "cloudinary"
import fs from "fs"


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_CLOUD_KEY,
    api_secret: process.env.CLOUDINARY_CLOUD_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload the file on clouindary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })

        //file has been uploaded succesfully

        // console.log("File uploaded successfully!",
        // response.url);
        fs.unlink(localFilePath)
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the lovally saved temporary
        //file as the upload operation got failed.

        return null;
    }
}

export { uploadOnCloudinary };