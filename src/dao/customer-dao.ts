import { DCustomer, ICustomer } from "../models/customer-model";
import Customer from "../schemas/customer-schema";

export namespace CustomerDao {
    export async function createCustomer(brandData:ICustomer):Promise<DCustomer>{
        const saveUser = new Customer(brandData)
        return await saveUser.save();
    }

    export async function getCustomers(searchTerm:string):Promise<DCustomer[]>{
     
        return await Customer.find({ name: { $regex: searchTerm, $options: 'i' } });
    }
}