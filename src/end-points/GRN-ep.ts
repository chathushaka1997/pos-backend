import { NextFunction, Request, Response } from "express";
import { BrandDao } from "../dao/brand-dao";
import { DGRNItem, IGRNItem } from "../models/GRNItem-model";
import { GRNItemDao } from "../dao/GRNItem-dao";
import { GRNDao } from "../dao/GRN-dao";
import { IGRN } from "../models/GRN-model";
import { Types } from "mongoose";
import { StockDao } from "../dao/stock-dao";

export namespace GRNEp {
  export async function createGRN(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req.body);
      const items: IGRNItem[] = req.body.items;
      const invoiceNumber = req.body.invoiceNumber;
      const GRNItemIds: Types.ObjectId[] = [];
      await Promise.all(
        items.map(async (item) => {
          const response = await GRNItemDao.createGRN(item);
          if (response._id) {
            GRNItemIds.push(response._id);
            if (response.product) {
              const test = await StockDao.addNewStock(response.product, parseInt(response.quantity|| "0"));
              console.log("stock --------->", test);
            }
          }
        })
      );
      const dataObj: any = { items: GRNItemIds, invoiceNumber: invoiceNumber };

      const createGRN = await GRNDao.createGRN(dataObj);
      res.sendSuccess(createGRN, "GRN created!", 201);
    } catch (error) {
      console.log("Error ----> " + error);
      res.sendError("Error " + error, 400);
    }
  }

  export async function getGRNs(req: Request, res: Response, next: NextFunction) {
    try {
      let searchTerm = "";
      if (req.query.searchTag) {
        searchTerm = String(req.query.searchTag);
      }

      const brands = await BrandDao.getBrand(searchTerm);
      res.sendSuccess(brands, "Brands retrireve!");
    } catch (error) {
      console.log("Error ----> " + error);
      res.sendError("Error " + error, 400);
    }
  }
}
