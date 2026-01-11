import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const connectDBI = async () => {
    try {
    const connectionInstance =  await  mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`)
    console.log(`MongoDB connect !! DB Host ${connectionInstance.connection.host}`);
    
    } catch (error) {
        console.log("Mongo connectionERROR falied ",error)
        process.exit(1)
    }
}

export default connectDBI