import { Express } from "express";
import { CustomerEp } from "../end-points/customer-ep";



export function initCustomerRoutes(app:Express){
   app.post('/api/auth/customer/create',CustomerEp.createCustomer)
    /* app.post('/api/public/login',UserEp.loginUser)

    */
    app.get('/api/auth/customer/get',CustomerEp.getCustomers) 
}