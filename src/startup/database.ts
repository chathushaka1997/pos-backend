import mongoose from "mongoose";

const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

export default async function databaseSetup() {
  try {
    await mongoose.connect(getMongooseUri(),mongooseOptions as any);
    console.log("Database conenction successful"); 
  } catch (error) {
    console.log("Unable to connect to database -->" + error);
  }
}

function getMongooseUri(): string {
  const db_port: string = process.env.NODE_ENV !== "test" ? (process.env.MONGOOSE_URI as string) : (process.env.TEST_MONGOOSE_URI as string);
  return db_port;
  //return 'mongodb://localhost:27017/tyre_pos'
}
