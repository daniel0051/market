export enum ProductType {
  PERISHABLE = "Perecível",
  ELECTRONIC = "Eletrônico",
  WEIGHT = "Por Peso",
}

export default abstract class Product {
  private id: number = 0;
  private name: string = "";
  private basePrice: number = 0;
  protected type!: ProductType;

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

  public setId(id: number): void {
    if (id > 0) {
      this.id = id;
    } else {
      console.error("ID inválido: Deve ser maior que zero.");
    }
  }

  public setName(name: string): void {
    if (name.trim().length > 0) {
      this.name = name;
    } else {
      console.error("Nome inválido: Não pode ser vazio.");
    }
  }

  public setBasePrice(price: number): void {
    if (price >= 0) {
      this.basePrice = price;
    } else {
      console.error("Preço inválido: Não pode ser negativo.");
    }
  }

  public abstract calculateFinalPrice(): number;
}
