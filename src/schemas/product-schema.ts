import * as mongoose from "mongoose";
import { Schema } from "mongoose";
import { IProduct } from "../models/product-model";
import Brand from "./brand-schema";

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
export const ProductSchema = new mongoose.Schema(
  {
    brand: {
      type: Schema.Types.ObjectId,
      require: true,
      ref: Brand.modelName,
    },
    size: {
      type: Schema.Types.String,
      require: true,
    },
    price: {
      type: Schema.Types.Number,
      require: true,
    },
    threadPattern: {
      type: Schema.Types.String,
      require: true,
    },
    name: {
      type: Schema.Types.String,
      require: true,
    },
  },
  schemaOptions
);

const Product = mongoose.model<IProduct>("Product", ProductSchema);

export default Product;
