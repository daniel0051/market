import Product from "./Product";

export default class ProductByWeight extends Product {
  private weight: number = 0;

  public setWeight(weight: number): void {
    if (weight > 0) this.weight = weight;
  }

  public getWeight(): number {
    return this.weight;
  }

  public calculateFinalPrice(): number {
    return this.getBasePrice() * this.weight;
  }
}
