import mongoose from "mongoose";
import { Types } from "mongoose";

interface CommonAttributes {
  name: string;
  email:string
  phoneNumber:string
  address:string
}

export interface DCustomer extends CommonAttributes {
  _id?: Types.ObjectId;
}

export interface ICustomer extends CommonAttributes, mongoose.Document {}
