import PeopleController from "../Controller/PeopleController";
import promptSync from "prompt-sync";

export default class ClientRegistration {
  private prompt = promptSync();
  private controller: PeopleController;

  constructor(controller: PeopleController) {
    this.controller = controller;
    this.registerClient();
  }

  public registerClient(): void {
    console.log("\n--- Cadastro de Cliente ---");
    const customerData = {
      name: this.prompt("Nome: "),
      tel: this.prompt("Telefone: "),
      cpf: this.prompt("CPF: "),
      email: this.prompt("Email (opcional): "),
    };

    this.controller.save(customerData);
  }
}
