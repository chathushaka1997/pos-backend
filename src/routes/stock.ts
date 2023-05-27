import { Express } from "express";
import { ProductEp } from "../end-points/product-ep";
import { StockEp } from "../end-points/stock-ep";



export function initStockRoutes(app:Express){
   app.post('/api/auth/stock/create',ProductEp.createProduct)
    /* app.post('/api/public/login',UserEp.loginUser)

    */
    app.get('/api/auth/stock/get',StockEp.getStocks) 
}