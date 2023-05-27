import { NextFunction, Request, Response } from "express";
import { CustomerDao } from "../dao/customer-dao";

export namespace CustomerEp {
  export async function createCustomer(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req.body);

      const customerData = req.body;
      const createCustomer = await CustomerDao.createCustomer(customerData);
      res.sendSuccess(createCustomer, "Customer created!", 201);
    } catch (error) {
      console.log("Error ----> " + error);
      res.sendError("Error " + error, 400);
    }
  }

  export async function getCustomers(req: Request, res: Response, next: NextFunction) {
    try {
      let searchTerm = "";
      if (req.query.searchTag) {
        searchTerm = String(req.query.searchTag);
      }

      const customers = await CustomerDao.getCustomers(searchTerm);
      res.sendSuccess(customers, "Customers retrireve!");
    } catch (error) {
      console.log("Error ----> " + error);
      res.sendError("Error " + error, 400);
    }
  }
}
