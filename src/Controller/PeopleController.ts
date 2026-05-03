import PeopleService from "../service/PeopleService";

export default class PeopleController {
  constructor(private peopleService: PeopleService) {}

  public save(clientDto: any): void {
    try {
      const client = this.peopleService.register(clientDto);
      console.log(
        `\n[Controller] Cliente ${client.getName()} cadastrado com sucesso!`,
      );
    } catch (error) {}
  }

  public findByCpf(cpf: string) {
    try {
      const client = this.peopleService.searchCpf(cpf);
      return client;
    } catch (e: any) {
      console.log(e.message);
    }
  }
}
