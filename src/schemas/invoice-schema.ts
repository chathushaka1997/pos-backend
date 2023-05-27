import * as mongoose from "mongoose";
import { Schema } from "mongoose";
import { IInvoice } from "../models/invoice-model";
import InvoiceItem from "./invoiceItem-schema";

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
export const InvoiceSchema = new mongoose.Schema(
  {
    invoiceItems: [
      {
        type: Schema.Types.ObjectId,
        require: true,
        ref: InvoiceItem.modelName,
      },
    ],
    totalPrice: {
      type: Schema.Types.Number,
      require: true,
    },
  },
  schemaOptions
);

const Invoice = mongoose.model<IInvoice>("Invoice", InvoiceSchema);

export default Invoice;
