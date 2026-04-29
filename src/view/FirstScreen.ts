import promptSync from "prompt-sync";
import ProductRegistration from "./ProductRegistration";
import MainController from "../Controller/MainController";
import SaleView from "./SaleView";
import ClientRegistration from "./ClientRegistration";

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
      console.log("\n--- SUPERMERCADO MVC ---");
      console.log("[1]- Cadastrar Produtos");
      console.log("[2]- Passar produto (Venda)");
      console.log("[3]- Cadastrar Cliente (Pessoa)");
      console.log("[4]- Sair");

      let input = this.prompt("> ").trim();
      if (input === "") {
        continue;
      }
      let option = parseInt(input);

      switch (option) {
        case 1:
          new ProductRegistration(this.controller.productCtrl);
          break;
        case 2:
          new SaleView(this.controller.SaleController);
          break;
        case 3:
          new ClientRegistration(this.controller.peopleCtrl);
          break;
        case 4:
          open = false;
          console.log("Fechamento do caixa concluído.");
          break;
        default:
          console.log("Opção inválida.");
          break;
      }
    }
  }
}
