import fs from "fs";
import path from "path";
import Product from "../models/Product";
import People from "../models/People";
import Checkout from "../models/Checkout";

export default class Database {
  private filePath = path.resolve(__dirname, "../data/db.json");

  private products: Product[] = [];
  private customers: People[] = [];
  private sales: Checkout[] = [];

  constructor() {
    this.utilsLoadData();
  }

  public saveProduct(product: Product): void {
    this.products.push(product);
    this.utilsSaveData();
  }

  public savePeople(person: People): void {
    this.customers.push(person);
    this.utilsSaveData();
  }

  public purchaseHistory(products: Checkout): void {
    this.sales.push(products);
    this.utilsSaveData();
  }

  public getProducts(): Product[] {
    return this.products;
  }

  public getCustomers(): People[] {
    return this.customers;
  }

  public getSales(): Checkout[] {
    return this.sales;
  }

  public findProductById(id: number): Product | undefined {
    return this.products.find((p) => p.getId() === id);
  }

  public findPeopleByCpf(cpf: string): People | undefined {
    return this.customers.find((p) => p.cpf == cpf);
  }

  public findOrThrow<T>(
    items: T[],
    predicate: (item: T) => boolean,
    errorToThrow: Error,
  ): T {
    const item = items.find(predicate);

    if (!item) {
      throw errorToThrow;
    }

    return item;
  }

  private utilsSaveData(): void {
    const dataToSave = {
      products: this.products,
      customers: this.customers,
      sales: this.sales,
    };

    const dir = path.dirname(this.filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(
      this.filePath,
      JSON.stringify(dataToSave, null, 2),
      "utf-8",
    );
  }

  private utilsLoadData(): void {
    if (!fs.existsSync(this.filePath)) {
      return;
    }

    try {
      const fileContent = fs.readFileSync(this.filePath, "utf-8");
      const parsedData = JSON.parse(fileContent);

      this.products = parsedData.products || [];
      this.customers = parsedData.customers || [];
      this.sales = parsedData.sales || [];
    } catch (error) {
      console.error(
        "Aviso: Falha ao carregar o arquivo de banco de dados JSON. Iniciando banco vazio.",
      );
    }
  }
}
