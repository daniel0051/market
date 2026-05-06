import promptSync from "prompt-sync";
import ProductController from "../Controller/ProductController";
import { ProductType } from "../models/Product";
import { IProductInput } from "../types/interfaces";

export default class ProductRegistration {
  private prompt = promptSync();

  constructor(private productController: ProductController) {
    this.registerProduct();
  }

  public registerProduct(): void {
    let choice = parseInt(
      this.prompt("[1] - Perecível\n[2] - Eletrônico\n[3] - Por Peso\n"),
    );

    let type: ProductType;
    if (choice === 1) type = ProductType.PERISHABLE;
    else if (choice === 2) type = ProductType.ELECTRONIC;
    else if (choice === 3) type = ProductType.WEIGHT;
    else {
      console.log("Opção de tipo inválida!");
      return;
    }

    const productData: IProductInput = {
      id: parseInt(this.prompt("Digite o ID: ")),
      name: this.prompt("Digite o nome: "),
      basePrice: parseFloat(this.prompt("Digite o preço: ")),
    };

    if (type === ProductType.PERISHABLE)
      productData.expirationDate = this.prompt(
        "Data de validade (YYYY-MM-DD): ",
      );

    if (type === ProductType.ELECTRONIC)
      productData.warranty = parseInt(this.prompt("Meses de garantia: "));

    if (type === ProductType.WEIGHT)
      productData.weight = parseFloat(this.prompt("Peso inicial: "));

    this.productController.save(type, productData);
  }
}
