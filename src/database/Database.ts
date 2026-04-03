import Product from "../models/Product";

export default class Database {
  public products: Product[] = [];

  public save(product: Product): void {
    this.products.push(product);
    console.log(`[Database] ${product.getName()} armazenado com sucesso.`);
  }

  public getAll(): Product[] {
    return [...this.products];
  }

  public findById(id: number): Product | undefined {
    return this.products.find((p) => p.getId() === id);
  }
}
