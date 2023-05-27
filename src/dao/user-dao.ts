import { IUser } from "../models/user-model";
import User from "../schemas/user-schema";

export namespace UserDao {
    export async function registerUser(userData:IUser):Promise<IUser>{
        const saveUser = new User(userData)
        return await saveUser.save();
    }
    export async function loginUser(
        password: string,
        user: IUser
      ): Promise<any> {
        const isMatch = await user.comparePassword(password);
        if (isMatch) {
          var tokenString = await user.createAccessToken(
            "24 hours"
          );
    
          return {
            token: tokenString,
          };
        } else {
          console.log("error");
          
        }
      }
}