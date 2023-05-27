import { NextFunction, Request, Response } from "express";
import { SupplierDao } from "../dao/supplier-dao";

export namespace SupplierEp {
  export async function createSupplier(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req.body);

      const supplierData = req.body;
      const createSupplier = await SupplierDao.createSupplier(supplierData);
      res.sendSuccess(createSupplier, "Customer created!", 201);
    } catch (error) {
      console.log("Error ----> " + error);
      res.sendError("Error " + error, 400);
    }
  }

  export async function getSuppliers(req: Request, res: Response, next: NextFunction) {
    try {
      let searchTerm = "";
      if (req.query.searchTag) {
        searchTerm = String(req.query.searchTag);
      }

      const suppliers = await SupplierDao.getSuppliers(searchTerm);
      res.sendSuccess(suppliers, "Suppliers retrireve!");
    } catch (error) {
      console.log("Error ----> " + error);
      res.sendError("Error " + error, 400);
    }
  }
}