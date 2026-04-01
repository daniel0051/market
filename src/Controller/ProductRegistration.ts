import Database from "../database/Database";
import Product from "../models/Product";

export default class ProductRegistration {
  private product: Product[] = [];
  private dataBase: Database[] = [];

  public addProduct(product: Product): void {
    this.product.push(product);
    this.dataBase = structuredClone(this.product);
  }
}
