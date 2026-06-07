import { handleControllerAction } from "../common/utils/handleResponse";
import PeopleService from "../service/PeopleService";
import { IPeopleInput } from "../types/interfaces";

export default class PeopleController {
  constructor(private peopleService: PeopleService) {}

  public save(clientDto: IPeopleInput): void {
    this.peopleService.register(clientDto);
  }

  public findByCpf(cpf: string) {
    return handleControllerAction(() => this.peopleService.searchCpf(cpf));
  }
}
