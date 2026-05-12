import promptSync from "prompt-sync";
import ProductRegistration from "./ProductRegistration";
import MainController from "../controller/MainController";
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
          const productView = new ProductRegistration(
            this.controller.productController,
          );
          productView.registerProduct();
          break;
        case 2:
          const saleView = new SaleView(this.controller.SaleController);
          saleView.startSale();
          break;
        case 3:
          const clientView = new ClientRegistration(
            this.controller.PeopleController,
          );
          clientView.registerClient();
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
