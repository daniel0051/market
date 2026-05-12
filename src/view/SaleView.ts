import PromptSync from "prompt-sync";
import Checkout, { PaymentMethod } from "../models/Checkout";
import SaleController from "../controller/SaleController";

export default class SaleView {
  private prompt = PromptSync();

  constructor(private controller: SaleController) {}

  public startSale(): void {
    const checkout = new Checkout();
    let buying: boolean = true;

    console.log("\n==============================");
    console.log("      CAIXA ABERTO - VENDA    ");
    console.log("==============================");

    const cpf = this.prompt("CPF do Cliente (ou Enter para pular): ").trim();
    if (cpf !== "") {
      try {
        const client = this.controller.foundCustomer(cpf);
        if (client) {
          console.log(`Cliente ${client.getName()} identificado.`);
          checkout.idCliente(client);
        }
      } catch (e) {
        console.log("Cliente não cadastrado. Seguindo sem desconto.");
      }
    }

    while (buying) {
      console.log(`\nSubtotal: R$ ${checkout.totalAmount().toFixed(2)}`);
      const idInput = this.prompt("ID do Produto (0 para fechar): ").trim();

      if (idInput === "0" || idInput === "") {
        buying = false;
        break;
      }

      const id = parseInt(idInput);

      try {
        const product = this.controller.searchProduct(id);
        checkout.addItem(product);
        console.log(`+ ${product.getName()} adicionado.`);
      } catch (e) {
        console.log("(!) Produto inexistente.");
      }
    }

    if (checkout.totalAmount() > 0) {
      this.finish(checkout);
    } else {
      console.log("Venda cancelada (carrinho vazio).");
    }
  }

  private finish(checkout: Checkout): void {
    console.log("\n--- PAGAMENTO ---");
    console.log("1. PIX | 2. Cartão | 3. Dinheiro");
    const op = parseInt(this.prompt("> "));

    let method = PaymentMethod.CASH;
    if (op === 1) method = PaymentMethod.PIX;
    if (op === 2) method = PaymentMethod.CARD;

    checkout.finishSale(method);

    try {
      this.controller.fecharCarrinho(checkout);
      console.log(
        `Processando venda de R$ ${checkout.totalAmount().toFixed(2)}`,
      );
      console.log("Venda persistida com sucesso.");
    } catch (error) {
      console.log(error);
    }

    console.log("==============================");
    console.log("      VENDA FINALIZADA!       ");
    console.log("==============================");
  }
}
