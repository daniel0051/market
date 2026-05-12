import promptSync from "prompt-sync";
import ProductController from "../controller/ProductController";
import { ProductType } from "../models/Product";
import { IProductInput } from "../types/interfaces";

export default class ProductRegistration {
  private prompt = promptSync();

  constructor(private productController: ProductController) {}

  public registerProduct(): void {
    console.log("\n--- Tipo de Produto ---");
    console.log("[1] - Perecível");
    console.log("[2] - Eletrônico");
    console.log("[3] - Por Peso");

    let input = this.prompt("Opção: ").trim();
    if (input === "") return;

    let choice = parseInt(input);

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

    try {
      this.productController.save(type, productData);
      console.log(`Produto ${productData.name} cadastrado com sucesso`);
    } catch (error) {
      console.log(`Falha em cadastrar o produto ${error}`);
    }
  }
}
