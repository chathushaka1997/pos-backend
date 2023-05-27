import { NextFunction, Request, Response } from "express";
import  passport from "passport";
import { AppLogger } from "../common/logging";


export class Authentication {
    public static verifyToken(req: Request, res: Response, next: NextFunction) {
        return passport.authenticate(
          "jwt",
          { session: false },
          (err: any, user: any, info: any) => {
            if (err || !user) {
              AppLogger.error(`Login Failed. reason: ${info}`);
              return res.sendError(`Authentication Failed. reason: ${info}`,401 );
            }
            if (user.userStatus === "BLOCKED") {
              AppLogger.error(`Login Failed. User Blocked By Admin`);
              return res.sendError("This Account is Blocked");
            }
            req.user = user;
            req.body.user = user._id;
            return next();
          }
        )(req, res, next);
      }
}