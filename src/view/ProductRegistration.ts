import MainController from "../Controller/MainController";
import Database from "../database/Database";
import PerishableProduct from "../models/PerishableProduct";
import Product from "../models/Product";
import promptSync from "prompt-sync";
import ProductByWeight from "../models/ProductByWeight";
import ElectronicProduct from "../models/ElectronicProduct";

export default class ProductRegistration {
  private prompt = promptSync();
  private controller: MainController;
  private database: Database = new Database();

  constructor(controller: MainController) {
    this.controller = controller;
    this.registerProduct();
  }

  private ask(message: string): string {
    return this.prompt(message) ?? "";
  }

  public registerProduct(): void {
    let product: Product | null = null;

    let choice = parseInt(
      this.prompt("[1] - Perecível\n[2] - Eletrônico\n[3] - Por Peso\n"),
    );
    switch (choice) {
      case 1:
        product = new PerishableProduct();
        break;
      case 2:
        product = new ElectronicProduct();
        break;
      case 3:
        product = new ProductByWeight();
        break;

      default:
        console.log("Opção inválida");
        break;
    }

    if (product) {
      product.setId(parseInt(this.ask("Digite o ID: ")));
      product.setName(this.ask("Digite o nome: "));
      product.setBasePrice(parseFloat(this.ask("Digite o preço: ")));

      if (product instanceof ElectronicProduct) {
        const months = parseInt(this.ask("Meses de garantia: "));
        product.setWarrantyMonths(months);
      }

      if (product instanceof PerishableProduct) {
        const date = this.ask("Data de validade (YYYY-MM-DD): ");
        product.setDateValidity(date);
      }

      if (product instanceof ProductByWeight) {
        const weight = parseFloat(this.ask("Peso inicial: "));
        product.setWeight(weight);
      }

      this.controller.database.save(product);
    }
  }
}
