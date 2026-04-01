import Product from "./Product";

export default class PerishableProduct extends Product {
  private dateValidity: Date;

  constructor(id: number, name: string, price: number, date: string) {
    super(id, name, price);
    this.dateValidity = new Date(date);
    this.dateValidity.setHours(0, 0, 0, 0);
  }

  getDateValidity(): String {
    return this.dateValidity.toLocaleDateString("pt-BR");
  }

  public isExpired(): boolean {
    return new Date() > this.dateValidity;
  }

  public calculateFinalPrice(): number {
    if (this.isExpired()) return 0;

    const hoje = new Date().getTime();
    const vencimento = this.dateValidity.getTime();
    const diferencaEmMs = vencimento - hoje;

    const dezDiasEmMs = 10 * 24 * 60 * 60 * 1000;

    if (diferencaEmMs <= dezDiasEmMs) {
      return this.getBasePrice() * 0.8;
    }

    return this.getBasePrice();
  }
}
