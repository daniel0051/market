import Product from "./Product";

export default class PerishableProduct extends Product {
  private dateValidity!: Date;

  public setDateValidity(dateString: string): void {
    const newDate = new Date(dateString);
    newDate.setHours(0, 0, 0, 0);
    this.dateValidity = newDate;
  }

  getDateValidity(): String {
    return this.dateValidity.toLocaleDateString("pt-BR");
  }

  public isExpired(): boolean {
    if (!this.dateValidity) return false;
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    return new Date() > this.dateValidity;
  }

  public calculateFinalPrice(): number {
    if (this.isExpired()) return 0;

    const now = new Date().getTime();
    const expirationDate = this.dateValidity.getTime();
    const differenceInMs = expirationDate - now;

    const tenDaysInMs = 10 * 24 * 60 * 60 * 1000;

    if (differenceInMs <= tenDaysInMs) {
      return this.getBasePrice() * 0.8;
    }

    return this.getBasePrice();
  }
}
