import PeopleService from "../service/PeopleService";

export default class PeopleController {
  constructor(private peopleService: PeopleService) {}

  public save(data: any): void {
    try {
      const client = this.peopleService.register(data);
      console.log(
        `\n[Controller] Cliente ${client.getName()} cadastrado com sucesso!`,
      );
    } catch (error) {}
  }

  public findByCpf(cpf: string) {
    try {
      const cliente = this.peopleService.searchCpf(cpf);
      return cliente;
    } catch (e: any) {
      console.log(e.message);
    }
  }
}
