import  express from 'express';
import passport from 'passport';
import passportJWT,{ExtractJwt} from "passport-jwt";
import User from "../schemas/user-schema";



const JWTStrategy = passportJWT.Strategy;

export default async function passportStartup(app: express.Application) {
    app.use(passport.initialize());
    passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET
    }, (jwtPayload, callback:any) => {

        return User.findById(jwtPayload.user_id).then(user => {
            return callback(null, user);
        }).catch(ex => {
            return callback(ex);
        });
    }));
}
