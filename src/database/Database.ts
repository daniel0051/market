import Product from "../models/Product";
import People from "../models/People";

export default class Database {
  private products: Product[] = [];
  private customers: People[] = [];

  public saveProduct(product: Product): void {
    this.products.push(product);
    console.log(`[Database] Produto ${product.getName()} armazenado.`);
  }

  public savePeople(person: People): void {
    this.customers.push(person);
    console.log(`[Database] Cliente ${person.getName()} armazenado.`);
  }

  public findProductById(id: number): Product | undefined {
    return this.products.find((p) => p.getId() === id);
  }

  public findPeopleByCpf(cpf: string): People | undefined {
    return this.customers.find((p) => p.cpf == cpf);
  }
}
