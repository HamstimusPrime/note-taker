import mongoose, { connect } from "mongoose"
import dotenv from "dotenv"


dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("successfully connected to MongoDB")
  } catch (error) {
    console.log("error establishing connection to MongoDB")
    process.exit(1)
  }
}


