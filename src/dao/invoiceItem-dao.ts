
import { DInvoiceItem, InvoiceItemModel } from "../models/invoiceItem-model";
import InvoiceItem from "../schemas/invoiceItem-schema";


export namespace InvoiceItemDao {
    export async function createInvoiceItem(invoiceItemData:InvoiceItemModel):Promise<DInvoiceItem>{
        const saveInvoice = new InvoiceItem(invoiceItemData)
        return await saveInvoice.save();
    }

    export async function getInvoiceItems(searchTerm?:string):Promise<DInvoiceItem[]>{
     
        return await InvoiceItem.find();
    }
}