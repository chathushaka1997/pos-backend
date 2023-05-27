import { Express } from "express";
import { SupplierEp } from "../end-points/supplier-ep";




export function initSupplierRoutes(app:Express){
   app.post('/api/auth/supplier/create',SupplierEp.createSupplier)
    /* app.post('/api/public/login',UserEp.loginUser)

    */
    app.get('/api/auth/supplier/get',SupplierEp.getSuppliers) 
}