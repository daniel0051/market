import People from "./People";
import Product from "./Product";

export enum PaymentMethod {
  CASH = "Dinheiro",
  CARD = "Cartão",
  PIX = "PIX",
}

export default class Checkout {
  private listItens: Product[] = [];
  private formPayment: string = "";
  private client?: People;

  public idCliente(client: People): void {
    this.client = client;
  }

  public addItem(product: Product): void {
    this.listItens.push(product);
  }

  public totalAmount(): number {
    const subtotal = this.listItens.reduce(
      (total, item) => total + item.calculateFinalPrice(),
      0,
    );

    if (this.client) {
      const discountPercentage = this.client.getDiscount();
      const discountValue = subtotal * discountPercentage;
      return subtotal - discountValue;
    }

    return subtotal;
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

    if (this.client && this.client.getDiscount() > 0) {
      const subtotal = this.listItens.reduce(
        (t, i) => t + i.calculateFinalPrice(),
        0,
      );
      const desc = subtotal * this.client.getDiscount();
      console.log(`Subtotal: R$ ${subtotal.toFixed(2)}`);
      console.log(
        `Desconto (${this.client.getDiscount() * 100}%): -R$ ${desc.toFixed(2)}`,
      );
    }

    console.log(`TOTAL FINAL: R$ ${this.totalAmount().toFixed(2)}`);
    console.log(`PAGAMENTO: ${this.formPayment}`);
    if (this.client)
      console.log(
        `CLIENTE: ${this.client.getName()} (CPF: ${this.client.cpf})`,
      );
    console.log("==============================\n");
  }
}
