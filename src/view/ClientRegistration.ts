import { capitalizeName } from "../common/utils/string-formatter.util";
import PeopleController from "../controller/PeopleController";
import promptSync from "prompt-sync";

export default class ClientRegistration {
  private prompt = promptSync();

  constructor(private controller: PeopleController) {}

  public registerClient(): void {
    console.log("\n--- Cadastro de Cliente ---");
    const clientDto = {
      name: this.prompt("Nome: "),
      tel: this.prompt("Telefone: "),
      cpf: this.prompt("CPF: "),
      email: this.prompt("Email (opcional): "),
    };

    try {
      this.controller.save(clientDto);
      console.log(
        `Cliente ${capitalizeName(clientDto.name)} cadastrado com sucesso`,
      );
    } catch (error) {
      console.log(error);
    }
  }
}
