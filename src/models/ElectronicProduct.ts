import Product from "./Product";

export default class ElectronicProduct extends Product {
  private warrantyMonths: number = 0;

  /* constructor(id: number, name: string, price: number, months: number) {
    super(id, name, price);
    this.warrantyMonths = months;
  } */

  public getWarrantyMonths(): number {
    return this.warrantyMonths;
  }

  public setWarrantyMonths(month: number): void {
    this.warrantyMonths = month;
  }

  public extendWarranty(extraMonths: number): void {
    if (extraMonths > 0) this.warrantyMonths += extraMonths;
  }

  public calculateFinalPrice(): number {
    let finalPrice = this.getBasePrice();

    if (this.warrantyMonths > 12) {
      const extraMonths = this.warrantyMonths - 12;
      const warrantyCost = this.getBasePrice() * (extraMonths * 0.01);

      finalPrice += warrantyCost;
    }

    return finalPrice;
  }
}
