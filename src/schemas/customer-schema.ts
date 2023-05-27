import * as mongoose from "mongoose";
import { Schema } from "mongoose";
import { ICustomer } from "../models/customer-model";

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
export const CustomerSchema = new mongoose.Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true
    },
    email: {
      type: Schema.Types.String,
      required: true,
      unique: true
    },
    phoneNumber: {
      type: Schema.Types.String,
      required: true
    },
    address: {
      type: Schema.Types.String,
      required: true
    },
  },
  schemaOptions
);

const Customer = mongoose.model<ICustomer>("Customer", CustomerSchema);

export default Customer;
