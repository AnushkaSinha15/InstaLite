import "dotenv/config";
import mongoose from "mongoose";


async function connectDb() {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("connected to db");
}

export default connectDb;
