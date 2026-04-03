import promptSync from "prompt-sync";
import ProductRegistration from "./ProductRegistration";
import MainController from "../Controller/MainController";
import SaleView from "./SaleView";

export default class FirstScreen {
  prompt = promptSync();
  private controller: MainController;

  constructor(controller: MainController) {
    this.controller = controller;
    this.mainMenu();
  }

  public mainMenu(): void {
    let open: boolean = true;

    while (open) {
      console.log("\n--- Menu Principal ---");
      console.log("[1]- Cadastra Produtos");
      console.log("[2]- Passar produto");
      console.log("[3]- Sair");

      let input = this.prompt("> ").trim();
      if (input === "") {
        continue;
      }
      let option = parseInt(input);

      switch (option) {
        case 1:
          new ProductRegistration(this.controller);
          break;
        case 2:
          new SaleView(this.controller);
          break;
        case 3:
          open = false;
          console.log("Fechamendo do caixa");
          break;
        default:
          break;
      }
    }
  }
}
