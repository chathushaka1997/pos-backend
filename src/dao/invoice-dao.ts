import { DInvoice, InvoiceModel } from "../models/invoice-model";
import Invoice from "../schemas/invoice-schema";

export namespace InvoiceDao {
    export async function createInvoice(invoiceData:InvoiceModel):Promise<DInvoice>{
        const saveUser = new Invoice(invoiceData)
        return await saveUser.save();
    }

    export async function getInvoices(searchTerm?:string):Promise<DInvoice[]>{
     
        return await Invoice.find();
    }
}