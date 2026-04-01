import Product from "../models/Product";

export default class Database extends Product {
  public calculateFinalPrice(): number {
    return 0;
  }
}
