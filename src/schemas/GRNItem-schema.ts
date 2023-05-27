import * as mongoose from "mongoose";
import { Schema } from "mongoose";
import { IGRNItem } from "../models/GRNItem-model";
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
export const GRNItemSchema = new mongoose.Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      require: true,
      ref: Product.modelName,
    },
    wholeSalePrice: {
      type: Schema.Types.Number,
      require: true,
    },
    retailPrice: {
      type: Schema.Types.Number,
      require: true,
    },
    quantity: {
      type: Schema.Types.Number,
      require: true,
    },
    freeIssues: {
      type: Schema.Types.Number,
      require: true,
    },
    discount: {
      type: Schema.Types.Number,
      require: true,
    },
    UOM: {
      type: Schema.Types.String,
      require: true,
    },
  },
  schemaOptions
);

const GRNItem = mongoose.model<IGRNItem>("GRNItem", GRNItemSchema);

export default GRNItem;
