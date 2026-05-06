import PeopleService from "../service/PeopleService";
import { IPeopleInput } from "../types/interfaces";

export default class PeopleController {
  constructor(private peopleService: PeopleService) {}

  public save(clientDto: IPeopleInput): void {
    try {
      const client = this.peopleService.register(clientDto);
      console.log(
        `\n[Controller] Cliente ${client.getName()} cadastrado com sucesso!`,
      );
    } catch (error) {
      console.error("\n[Controller] Erro ao cadastrar cliente.", error);
    }
  }

  public findByCpf(cpf: string) {
    try {
      const client = this.peopleService.searchCpf(cpf);
      return client;
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.log(e.message);
      }
    }
  }
}
