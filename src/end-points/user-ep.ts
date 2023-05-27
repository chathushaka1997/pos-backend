import { NextFunction, Request, Response } from "express";
import { UserDao } from "../dao/user-dao";
import User from "../schemas/user-schema";

export namespace UserEp {
  export async function registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      const userData = req.body;
      const registerUser = await UserDao.registerUser(userData);
      res.sendSuccess(registerUser, "User created!", 201);
    } catch (error) {
      console.log("Error ----> " + error);
      res.sendError("Error ----> " + error, 403);
    }
  }

  export async function loginUser(req: Request, res: Response, next: NextFunction) {
    try {
      const email = req.body.email;
      const password = req.body.password;
      const userData = await User.findOne({ email: email });
      if (userData) {
        const accessToken = await UserDao.loginUser(password, userData);
        res.sendSuccess(accessToken, "User logged in!");
      } else {
        res.sendError("User not found", 404);
      }
    } catch (error) {
      console.log("Error ----> " + error);
      res.sendError("Error ----> " + error, 400);
    }
  }

  export async function getUserData(req: Request, res: Response, next: NextFunction) {
    try {
      res.sendSuccess(req.user, "User logged in!");
    } catch (error) {
      console.log("Error ----> " + error);
      res.sendError("User not authorized " + error, 403);
    }
  }
}
