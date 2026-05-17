import { ProductType } from "../models/Product";
import ProductService from "../service/ProductService";
import { IProductInput } from "../types/interfaces";

export default class ProductController {
  constructor(public productService: ProductService) {}

  public save(type: ProductType, productData: IProductInput): void {
    this.productService.register(type, productData);
  }

  public findById(id: number) {
    return this.productService.searchProduct(id);
  }
}
