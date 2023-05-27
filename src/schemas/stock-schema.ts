import * as mongoose from "mongoose";
import { Schema } from "mongoose";
import { IBrand } from "../models/brand-model";
import { IStock } from "../models/stock-model";
import Product from "./product-schema";

const schemaOptions: mongoose.SchemaOptions = {
  _id: true,
  id: false,
  timestamps: true,
  strict: false,
  toJSON: {
    getters: true,
    virtuals: true,
  },
};
export const StockSchema = new mongoose.Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      require: true,
      ref: Product.modelName,
    },
    availableQuantity: {
      type: Schema.Types.Number,
      require: true,
    },
  },
  schemaOptions
);

const Stock = mongoose.model<IStock>("Stock", StockSchema);

export default Stock;
