import * as mongoose from "mongoose";
import { Schema } from "mongoose";
import Supplier from "./supplier-schema";
import { IGRN } from "../models/GRN-model";
import GRNItem from "./GRNItem-schema";

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
export const BrandSchema = new mongoose.Schema(
  {
    supplier: {
      type: Schema.Types.ObjectId,
      require: true,
      ref: Supplier.modelName,
    },
    invoiceNumber: {
      type: Schema.Types.String,
      require: true,
    },
    items: [{
      type: Schema.Types.ObjectId,
      require: true,
      ref: GRNItem.modelName,
    }],
  },
  schemaOptions
);

const GRN = mongoose.model<IGRN>("GRN", BrandSchema);

export default GRN;
