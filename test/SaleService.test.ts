import Database from "@/database/Database";
import SaleService from "@/service/SaleService";
import Checkout, { PaymentMethod } from "@/models/Checkout";

describe("SaleService - Testes Unitários", () => {
  let database: Database;
  let saleService: SaleService;

  beforeEach(() => {
    database = new Database();
    saleService = new SaleService(database);
  });

  it("deve finalizar venda com sucesso e persistir no histórico do banco", () => {
    const checkout = new Checkout();
    checkout.finishSale(PaymentMethod.PIX);
    saleService.finalizeSale(checkout);
    const allSales = database.getSales();

    expect(allSales).toBeDefined();
    expect(allSales.length).toBe(1);
    expect(allSales[0]).toEqual(checkout);
  });
});
