import { Express } from "express";
import { CustomerEp } from "../end-points/customer-ep";
import { GRNEp } from "../end-points/GRN-ep";



export function initGRNRoutes(app:Express){
   app.post('/api/auth/grn/create',GRNEp.createGRN)
    /* app.post('/api/public/login',UserEp.loginUser)

    */
    app.get('/api/auth/grn/get',GRNEp.getGRNs) 
}