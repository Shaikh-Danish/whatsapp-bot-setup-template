import mongoose from "mongoose";

async function connectDB() {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGO_DB_URI}/${process.env.COLLECTION_NAME}`, {})
    console.log(`MongoDB Connected !! DB HOST: ${connectionInstance.connection.host}`);
  } catch(err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1)
  }
}

export default connectDB
