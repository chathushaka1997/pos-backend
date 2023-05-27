import * as mongoose from "mongoose";
import { Schema } from "mongoose";
import { ISupplier } from "../models/supplier-model";

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
export const SupplierSchema = new mongoose.Schema(
  {
    name: {
      type: Schema.Types.String,
      require: true,
    },
    email: {
      type: Schema.Types.String,
      require: true,
    },
    phoneNumber: {
      type: Schema.Types.String,
      require: true,
    },
    address: {
      type: Schema.Types.String,
      require: true,
    },
  },
  schemaOptions
);

const Supplier = mongoose.model<ISupplier>("Supplier", SupplierSchema);

export default Supplier;
