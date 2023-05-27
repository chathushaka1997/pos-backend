import { Express, Request, Response } from "express";
import { initUserRoutes } from "./user";
import { initBrandRoutes } from "./brand";
import { initProductRoutes } from "./product";
import { initCustomerRoutes } from "./customer";
import { initSupplierRoutes } from "./supplier";
import { initGRNRoutes } from "./GRN";
import { initStockRoutes } from "./stock";
import { initInvoiceRoutes } from "./invoice";

export function initRoutes(app: Express) {
    app.get("/api", (req: Request, res: Response) =>
    res.sendSuccess("Tyre shop app")
  );
  initUserRoutes(app);
  initBrandRoutes(app)
  initProductRoutes(app)
  initCustomerRoutes(app)
  initSupplierRoutes(app)
  initGRNRoutes(app)
  initStockRoutes(app)
  initInvoiceRoutes(app)
}