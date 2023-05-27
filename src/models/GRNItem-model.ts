import mongoose from "mongoose";
import { Types } from "mongoose";

interface CommonAttributes {
  product?: Types.ObjectId;
  wholeSalePrice?: string;
  retailPrice?: string;
  quantity?: string;
  freeIssues?: string;
  discount?: string;
  UOM?: string;
}

export interface DGRNItem extends CommonAttributes {
  _id?: Types.ObjectId;
}

export interface IGRNItem extends CommonAttributes, mongoose.Document {}
