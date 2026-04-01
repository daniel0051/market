export default abstract class Product {
  private id: number = 0;
  private name: string = "";
  private basePrice: number = 0;
  private type: string = "";

  constructor(id: number, name: string, basePrice: number) {
    this.id = id;
    this.name = name;
    this.basePrice = basePrice;
    this.type = this.constructor.name;
  }

  public getName(): string {
    return this.name;
  }

  public getId(): number {
    return this.id;
  }

  public getBasePrice(): number {
    return this.basePrice;
  }

  public getType(): string {
    return this.type;
  }

  public setBasePrice(newPrice: number): void {
    if (newPrice > 0) this.basePrice = newPrice;
  }

  // Métodos
  public abstract calculateFinalPrice(): number;
}
