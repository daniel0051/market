import PeopleService from "../service/PeopleService";
import { IPeopleInput } from "../types/interfaces";

export default class PeopleController {
  constructor(private peopleService: PeopleService) {}

  public save(clientDto: IPeopleInput): void {
    this.peopleService.register(clientDto);
  }

  public findByCpf(cpf: string) {
    const cliente = this.peopleService.searchCpf(cpf);
    return cliente;
  }
}
