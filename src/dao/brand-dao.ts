import { DBrand, IBrand } from "../models/brand-model";
import Brand from "../schemas/brand-schema";

export namespace BrandDao {
    export async function createBrand(brandData:IBrand):Promise<DBrand>{
        const saveUser = new Brand(brandData)
        return await saveUser.save();
    }

    export async function getBrand(searchTerm:string):Promise<DBrand[]>{
     
        return await Brand.find({ name: { $regex: searchTerm, $options: 'i' } });
    }
}