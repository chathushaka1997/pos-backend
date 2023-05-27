import mongoose from "mongoose";
import { Types } from "mongoose";

interface CommonAttributes {
  name: string;
  email:string
  phoneNumber:string
  address:string
}

export interface DSupplier extends CommonAttributes {
  _id?: Types.ObjectId;
}

export interface ISupplier extends CommonAttributes, mongoose.Document {}
