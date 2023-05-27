import { DGRN, IGRN } from "../models/GRN-model";
import { DBrand, IBrand } from "../models/brand-model";
import GRN from "../schemas/GRN-schema";
import Brand from "../schemas/brand-schema";

export namespace GRNDao {
    export async function createGRN(GRNData:IGRN):Promise<DGRN>{
        const saveUser = new GRN(GRNData)
        return await saveUser.save();
    }

    export async function getGRNs(searchTerm?:string):Promise<DGRN[]>{
     
        return await GRN.find();
    }
}