import { Express } from "express";
import { ProductEp } from "../end-points/product-ep";



export function initProductRoutes(app:Express){
   app.post('/api/auth/product/create',ProductEp.createProduct)
    /* app.post('/api/public/login',UserEp.loginUser)

    */
    app.get('/api/auth/product/get',ProductEp.getProducts) 
}