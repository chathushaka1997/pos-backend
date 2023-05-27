import { NextFunction, Request, Response } from "express";
import { BrandDao } from "../dao/brand-dao";
import { StockDao } from "../dao/stock-dao";

export namespace StockEp {
  export async function createStock(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req.body);

      const stockData = req.body;
      const createBrand = await StockDao.createStock(stockData);
      res.sendSuccess(createBrand, "Stock object created!", 201);
    } catch (error) {
      console.log("Error ----> " + error);
      res.sendError("Error " + error, 400);
    }
  }

  export async function getStocks(req: Request, res: Response, next: NextFunction) {
    try {
        let searchTerm =  "";
        if(req.query.searchTag){
            searchTerm = String(req.query.searchTag)
        }

      const brands = await StockDao.getStocks(searchTerm);
      res.sendSuccess(brands, "Stocks retrireve!");
    } catch (error) {
      console.log("Error ----> " + error);
      res.sendError("Error " + error, 400);
    }
  }
}
