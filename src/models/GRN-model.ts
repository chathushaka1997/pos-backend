import mongoose from "mongoose";
import { Types } from "mongoose";

interface CommonAttributes {
  supplier?: Types.ObjectId;
  invoiceNumber?: string;
  items?: Types.ObjectId[];
}

export interface DGRN extends CommonAttributes {
  _id?: Types.ObjectId;
}

export interface IGRN extends CommonAttributes, mongoose.Document {}
