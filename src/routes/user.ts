import { Express } from "express";
import { UserEp } from "../end-points/user-ep";

export function initUserRoutes(app:Express){
    app.post('/api/public/register',UserEp.registerUser)
    app.post('/api/public/login',UserEp.loginUser)

    app.get('/api/auth/get-user-data',UserEp.getUserData)
}