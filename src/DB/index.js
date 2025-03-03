import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async ()=>{
    try {
        const connectiinInstance=await mongoose.connect
        (`${process.env.MOGOODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST ${connectiinInstance.connection.host}`);
        

    } catch (error) {
        console.log("MONOGODB connection error ", error );
        process.exit(1)

    }
}
export default connectDB;