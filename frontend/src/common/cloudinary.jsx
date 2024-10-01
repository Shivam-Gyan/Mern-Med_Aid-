import axios from "axios"


export const UploadToCloudinary=async(image)=>{
    console.log("cloudinary",image)

    const response= await axios.post(import.meta.env.VITE_SERVER_DOMAIN+"/user/upload-image",
        {image},{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })

    return response.data;
}