import { NextFunction, Request, Response } from "express";
import { ErrorLogger } from "../common/logging";

export function ResponseHandler(req: Request, res: Response, next: NextFunction) {
  res.sendSuccess = (data: any, message: string | null = null, statusCode: number  = 200, ) => {
    res.status(statusCode).send({ success: true, data: data, statusCode: statusCode, message: message });
  };
  res.sendError = (error: any, errorCode:number = 500) => {
    if (typeof error === "string") {
      res.status(errorCode).send({ success: false, error: error, errorCode: errorCode });
    } else {
      if (!error) {
        error = { stack: null, message: "Unknown Error" };
      }
      ErrorLogger.error(error.stack);
      res.status(errorCode).send({ success: false, error: error.msg, errorData: error, errorCode: errorCode });
    }
  };
  next();
}
