import { Express } from "express";
import { InvoiceEp } from "../end-points/invoice-ep";



export function initInvoiceRoutes(app:Express){
   app.post('/api/auth/invoice/create',InvoiceEp.createInvoice)
    /* app.post('/api/public/login',UserEp.loginUser)

    */
    app.get('/api/auth/invoice/get',InvoiceEp.getInvoice) 
}