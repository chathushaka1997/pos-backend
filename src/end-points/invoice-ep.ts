import { NextFunction, Request, Response } from "express";
import { BrandDao } from "../dao/brand-dao";
import { DGRNItem, IGRNItem } from "../models/GRNItem-model";
import { GRNItemDao } from "../dao/GRNItem-dao";
import { GRNDao } from "../dao/GRN-dao";
import { IGRN } from "../models/GRN-model";
import { Types } from "mongoose";
import { StockDao } from "../dao/stock-dao";
import { InvoiceItemModel } from "../models/invoiceItem-model";
import { InvoiceItemDao } from "../dao/invoiceItem-dao";
import { InvoiceModel } from "../models/invoice-model";
import { InvoiceDao } from "../dao/invoice-dao";

export namespace InvoiceEp {
  export async function createInvoice(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req.body);
      const items: InvoiceItemModel[] = req.body.invoiceItems;
      const totalPrice = req.body.totalPrice;
      const invoiceItemIds: Types.ObjectId[] = [];
      await Promise.all(
        items.map(async (item) => {
          const response = await InvoiceItemDao.createInvoiceItem(item);
          if (response._id) {
            invoiceItemIds.push(response._id);
            if (response.product) {
              const test = await StockDao.reduceFromStock(response.product, response.quantity|| 0);
              console.log("stock --------->", test);
            }
          }
        })
      );
      const dataObj: InvoiceModel = { invoiceItems:invoiceItemIds,totalPrice:totalPrice };

      const createGRN = await InvoiceDao.createInvoice(dataObj);
      res.sendSuccess(createGRN, "GRN created!", 201);
    } catch (error) {
      console.log("Error ----> " + error);
      res.sendError("Error " + error, 400);
    }
  }

  export async function getInvoice(req: Request, res: Response, next: NextFunction) {
    try {
      let searchTerm = "";
      if (req.query.searchTag) {
        searchTerm = String(req.query.searchTag);
      }

      const brands = await InvoiceDao.getInvoices(searchTerm);
      res.sendSuccess(brands, "Brands retrireve!");
    } catch (error) {
      console.log("Error ----> " + error);
      res.sendError("Error " + error, 400);
    }
  }
}
