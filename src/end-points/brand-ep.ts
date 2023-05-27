import { NextFunction, Request, Response } from "express";
import { BrandDao } from "../dao/brand-dao";

export namespace BrandEp {
  export async function createBrand(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req.body);

      const brandData = req.body;
      const createBrand = await BrandDao.createBrand(brandData);
      res.sendSuccess(createBrand, "Brand created!", 201);
    } catch (error) {
      console.log("Error ----> " + error);
      res.sendError("Error " + error, 400);
    }
  }

  export async function getBrands(req: Request, res: Response, next: NextFunction) {
    try {
        let searchTerm =  "";
        if(req.query.searchTag){
            searchTerm = String(req.query.searchTag)
        }

      const brands = await BrandDao.getBrand(searchTerm);
      res.sendSuccess(brands, "Brands retrireve!");
    } catch (error) {
      console.log("Error ----> " + error);
      res.sendError("Error " + error, 400);
    }
  }
}
