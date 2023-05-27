import { Express } from "express";
import { BrandEp } from "../end-points/brand-ep";


export function initBrandRoutes(app:Express){
   app.post('/api/auth/brand/create',BrandEp.createBrand)
    /* app.post('/api/public/login',UserEp.loginUser)

    */
    app.get('/api/auth/brand/get',BrandEp.getBrands) 
}