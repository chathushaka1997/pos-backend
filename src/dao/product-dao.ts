import { DProduct, IProduct } from "../models/product-model";
import Product from "../schemas/product-schema";

export namespace ProductDao {
  export async function createProduct(productData: IProduct): Promise<DProduct> {
    const saveProduct = new Product(productData);
    return await saveProduct.save();
  }

  export async function getProducts(searchTerm: string): Promise<DProduct[]> {
    return await Product.find({ name: { $regex: searchTerm, $options: 'i' } }).populate({
      path: "brand",
    });
  }
}
