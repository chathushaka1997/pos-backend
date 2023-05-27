import mongoose from "mongoose";
import { Types } from "mongoose";

interface CommonAttributes {
  brand: Types.ObjectId;
  size:string;
  price:number;
  threadPattern:string
  name:string
}

export interface DProduct extends CommonAttributes {
  _id?: Types.ObjectId;
}

export interface IProduct extends CommonAttributes, mongoose.Document {}
