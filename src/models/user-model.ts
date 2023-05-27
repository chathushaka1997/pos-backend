import mongoose from "mongoose";
import { Types } from "mongoose";

interface CommonAttributes {
    name?: string;
    email?: string;
    password?: string;
    
  }

  export interface DUser extends CommonAttributes {
    _id?: Types.ObjectId;
  }
  
  export interface IUser extends CommonAttributes, mongoose.Document {

    createAccessToken(expiresIn?: string): string;

    comparePassword(password: string): Promise<boolean>;

    
  }
  