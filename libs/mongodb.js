import mongoose from "mongoose";

const connectMongoDB = async() => {
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected To DB");
    }catch(error){
        console.log("Failed : ", error);
    }
}

export default connectMongoDB;