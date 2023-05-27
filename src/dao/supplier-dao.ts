import { DSupplier, ISupplier } from "../models/supplier-model";
import Supplier from "../schemas/supplier-schema";

export namespace SupplierDao {
    export async function createSupplier(brandData:ISupplier):Promise<DSupplier>{
        const saveUser = new Supplier(brandData)
        return await saveUser.save();
    }

    export async function getSuppliers(searchTerm:string):Promise<DSupplier[]>{
     
        return await Supplier.find({ name: { $regex: searchTerm, $options: 'i' } });
    }
}