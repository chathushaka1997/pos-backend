import { NextFunction, Request, Response } from "express";
import { ProductDao } from "../dao/product-dao";
import { StockDao } from "../dao/stock-dao";

export namespace ProductEp {
    export async function createProduct(req: Request, res: Response, next: NextFunction) {
        try {
          console.log(req.body);
    
          const productData = req.body;
          const createProductd = await ProductDao.createProduct(productData);
          if(createProductd._id){
            await StockDao.createStock({product:createProductd._id,availableQuantity:0})
          }
        
          res.sendSuccess(createProductd, "Product created!", 201);
        } catch (error) {
          console.log("Error ----> " + error);
          res.sendError("Error " + error, 400);
        }
      }
    
      export async function getProducts(req: Request, res: Response, next: NextFunction) {
        try {
            let searchTerm =  "";
            if(req.query.searchTag){
                searchTerm = String(req.query.searchTag)
            }
    
          const products = await ProductDao.getProducts(searchTerm);
          res.sendSuccess(products, "Brands retrireve!");
        } catch (error) {
          console.log("Error ----> " + error);
          res.sendError("Error " + error, 400);
        }
      }
}
