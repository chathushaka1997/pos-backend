import mongoose from "mongoose";
import { Types } from "mongoose";

interface CommonAttributes {
  name: string;
}

export interface DBrand extends CommonAttributes {
  _id?: Types.ObjectId;
}

export interface IBrand extends CommonAttributes, mongoose.Document {}
