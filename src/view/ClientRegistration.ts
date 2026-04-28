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
    const dados = {
      nome: this.prompt("Nome: "),
      telefone: this.prompt("Telefone: "),
      cpf: this.prompt("CPF: "),
      email: this.prompt("Email (opcional): "),
    };

    this.controller.save(dados);
  }
}
