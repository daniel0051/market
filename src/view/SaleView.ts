import PromptSync from "prompt-sync";
import MainController from "../Controller/MainController";
import Checkout, { PaymentMethod } from "../models/Checkout";

export default class SaleView {
  private prompt = PromptSync();
  private controller: MainController;

  constructor(controller: MainController) {
    this.controller = controller;
    this.startSale();
  }

  private startSale(): void {
    const checkout = new Checkout();
    let buying: boolean = true;

    console.log("\n==============================");
    console.log("      NOVA VENDA INICIADA     ");
    console.log("==============================");

    while (buying) {
      console.log(
        `\n-> Subtotal Parcial: R$ ${checkout.calculateTotal().toFixed(2)}`,
      );

      const idInput = this.prompt(
        "Digite o ID do produto (ou 0 para FINALIZAR): ",
      ).trim();

      if (idInput === "") {
        continue;
      }

      const id = parseInt(idInput);

      if (id === 0) {
        buying = false;
        break;
      }

      const product = this.controller.findProductById(id);

      if (product) {
        checkout.addItem(product);
        console.log(`Adicionado: ${product.getName()}`);
      } else {
        console.log("Produto não encontrado no sistema.");
      }
    }

    const totalFinal = checkout.calculateTotal();

    if (totalFinal > 0) {
      this.finish(checkout);
    } else {
      console.log("\n Venda encerrada sem itens ou com valor zerado.");
    }
  }

  private finish(checkout: Checkout): void {
    console.log("Escolha o pagamento: 1. PIX | 2. Cartão | 3. Dinheiro");
    const op = parseInt(this.prompt("> "));

    let method = PaymentMethod.CASH;
    if (op === 1) method = PaymentMethod.PIX;
    if (op === 2) method = PaymentMethod.CARD;

    checkout.finishSale(method);
  }
}
