import mongoose from "mongoose";
import { Types } from "mongoose";

export interface InvoiceItemModel {
  product: Types.ObjectId;
  unitPrice: number;
  quantity: number;
}

export interface DInvoiceItem extends InvoiceItemModel {
  _id?: Types.ObjectId;
}

export interface IInvoiceItem extends InvoiceItemModel, mongoose.Document {}
