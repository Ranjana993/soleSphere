const cloudinary = require('cloudinary').v2;
const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET
});

module.exports = cloudinary;

const uploadOnCloudinary = async (localfilePath) => {
  if (!localfilePath) return null;
  try {
    const res = await cloudinary.uploader.upload(localfilePath, {
      resource_type: "auto"
    })
    console.log("file is uploaded ", res.url);
    return res.url
  } catch (error) {
    fs.unlinkSync(localfilePath)
    return null;
  }
}

export default uploadOnCloudinary