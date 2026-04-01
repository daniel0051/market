import Product from "./Product";

export enum PaymentMethod {
  CASH = "Dinheiro",
  CARD = "Cartão",
  PIX = "PIX",
}

export default class Checkout {
  private listItens: Product[] = [];
  private formPayment: string = "";

  public addItems(...products: Product[]): void {
    this.listItens.push(...products);
  }

  public calculateTotal(): number {
    let total: number = 0;

    this.listItens.forEach((item) => {
      total += item.calculateFinalPrice();
    });

    return total;
  }

  public finishSale(method: PaymentMethod): void {
    if (this.listItens.length === 0)
      return console.log("Carrinho vazio! Adicione itens antes de pagar.");

    this.formPayment = method;
    const total = this.calculateTotal();

    console.log(`--- VENDA FINALIZADA ---`);
    console.log(`Total: R$ ${total.toFixed(2)}`);
    console.log(`Pago com: ${this.formPayment}`);
  }
}
