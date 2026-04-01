import promptSync from "prompt-sync";
import ProductRegistration from "../Controller/ProductRegistration";
import Product from "../models/Product";

export default class FirstScreen {
  public mainMenu(): void {
    console.log("Bem vindo ao Sistema Nice Market!");
    const prompt = promptSync();

    let choice!: number;
    let open: boolean = true;
    while (open) {
      console.log("[1] - Cadastramento de Produtos");

      choice = Number(prompt("Escolha um das opções"));

      switch (choice) {
        case 1:
          console.log("Caso 1");
          let product: ProductRegistration = new ProductRegistration();
          product.addProduct(Number(prompt("Digite o ID do produto")));
          break;
        case 2:
          open = false;
          console.log("Fechou");
          break;
        default:
          break;
      }
    }
  }
}
