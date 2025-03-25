const cloudinary  = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

// Upload File  
async function uploadImage(filePath){
  try{
    const result = await cloudinary.uploader.upload(filePath);
    const show = {
      name: result.display_name,
      url: result.secure_url,
      id: result.public_id  // use to delete if required
    }
    console.log(show);
  }
  catch(error){
    console.error("Error: ",error);
  }
}
uploadImage("filename");

// Delete File
async function deleteImage(publicId){
  try{
    await cloudinary.uploader.destroy(publicId);
console.log("Deleted successfully");
  }
  catch(error){
    throw error("Error",error);
  }
}
deleteImage("publicId");
