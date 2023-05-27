import { DGRN, IGRN } from "../models/GRN-model";
import { DGRNItem, IGRNItem } from "../models/GRNItem-model";
import { DBrand, IBrand } from "../models/brand-model";
import GRN from "../schemas/GRN-schema";
import GRNItem from "../schemas/GRNItem-schema";
import Brand from "../schemas/brand-schema";

export namespace GRNItemDao {
    export async function createGRN(itemData:IGRNItem):Promise<DGRNItem>{
        const saveUser = new GRNItem(itemData)
        return await saveUser.save();
    }

    export async function getGRNs(searchTerm?:string):Promise<DGRNItem[]>{
     
        return await GRNItem.find();
    }
}