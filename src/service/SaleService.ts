import Database from "../database/Database";
import Checkout from "../models/Checkout";

export default class SaleService {
  constructor(private database: Database) {}

  public finalizeSale(checkout: Checkout): void {
    this.database.purchaseHistory(checkout);
  }
}
