import { ObjectId, Types } from "mongoose";
import { DStock, IStock, StockModel } from "../models/stock-model";
import Brand from "../schemas/brand-schema";
import Stock from "../schemas/stock-schema";

export namespace StockDao {
  export async function createStock(stockData: StockModel): Promise<DStock> {
    const saveUser = new Stock(stockData);
    return await saveUser.save();
  }

  export async function getStocks(searchTerm?: string): Promise<DStock[]> {
    return await Stock.find().populate({
        path: "product",
      });;
  }
  export async function addNewStock(productId: Types.ObjectId, addedQuantity: number): Promise<DStock | null> {
    return await Stock.findOneAndUpdate({ product: productId }, { $inc: { ["availableQuantity"]: addedQuantity } });
  }
  export async function reduceFromStock(productId: Types.ObjectId, addedQuantity: number): Promise<DStock | null> {
    return await Stock.findOneAndUpdate({ product: productId }, { $inc: { ["availableQuantity"]: -addedQuantity } });
  }
}
