import Database from "../database/Database";
import Product from "./Product";

export enum PaymentMethod {
  CASH = "Dinheiro",
  CARD = "Cartão",
  PIX = "PIX",
}

export default class Checkout {
  private listItens: Product[] = [];
  private formPayment: string = "";

  public addItem(product: Product): void {
    this.listItens.push(product);
  }

  public calculateTotal(): number {
    return this.listItens.reduce(
      (total, item) => total + item.calculateFinalPrice(),
      0,
    );
  }

  public finishSale(method: PaymentMethod): void {
    this.formPayment = method;

    console.log("\n==============================");
    console.log("       CUPOM FISCAL          ");
    console.log("==============================");

    this.listItens.forEach((item) => {
      console.log(
        `${item.getName()} .... R$ ${item.calculateFinalPrice().toFixed(2)}`,
      );
    });

    console.log("------------------------------");
    console.log(`TOTAL: R$ ${this.calculateTotal().toFixed(2)}`);
    console.log(`PAGAMENTO: ${this.formPayment}`);
    console.log("==============================\n");

    // Limpa o carrinho para a próxima venda se necessário
    this.listItens = [];
  }
}
