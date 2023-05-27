import mongoose from "mongoose";
import { Types } from "mongoose";

export interface StockModel {
  product: Types.ObjectId;
  availableQuantity: number;
}

export interface DStock extends StockModel {
  _id?: Types.ObjectId;
}

export interface IStock extends StockModel, mongoose.Document {}
