import * as mongoose from "mongoose";
import { Schema } from "mongoose";

import { IInvoice } from "../models/invoice-model";
import Product from "./product-schema";
import { IInvoiceItem } from "../models/invoiceItem-model";

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
export const InvoiceItemSchema = new mongoose.Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      require: true,
      ref: Product.modelName,
    },
    unitPrice: {
      type: Schema.Types.Number,
      require: true,
    },
    quantity: {
      type: Schema.Types.Number,
      require: true,
    },
  },
  schemaOptions
);

const InvoiceItem = mongoose.model<IInvoiceItem>("InvoiceItem", InvoiceItemSchema);

export default InvoiceItem;
