import Database from "../database/Database";
import Checkout from "../models/Checkout";

export default class SaleService {
  constructor(private database: Database) {}

  public finalizarVenda(checkout: Checkout): void {
    console.log(
      `[Service] Processando venda de R$ ${checkout.totalAmount().toFixed(2)}`,
    );

    console.log("[Service] Venda persistida com sucesso.");

    this.database.purchaseHistory(checkout);
  }
}
