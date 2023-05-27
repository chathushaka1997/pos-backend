import mongoose from "mongoose";
import { Types } from "mongoose";
import { DInvoiceItem, InvoiceItemModel } from "./invoiceItem-model";

export interface InvoiceModel {
    invoiceItems:InvoiceItemModel[] |Types.ObjectId[]
    totalPrice:number
}

export interface DInvoice extends InvoiceModel {
  _id?: Types.ObjectId;

}

export interface IInvoice extends InvoiceModel, mongoose.Document {}
