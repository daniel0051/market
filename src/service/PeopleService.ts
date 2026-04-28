import Database from "../database/Database";
import People from "../models/People";

export default class PeopleService {
  constructor(private database: Database) {}

  public register(data: any) {
    const newPeople = new People(
      data.nome,
      data.telefone,
      data.cpf,
      data.email,
    );

    newPeople.setDiscount(5);

    this.database.savePeople(newPeople);

    return newPeople;
  }

  public searchCpf(cpf: string): People {
    const cliente = this.database.findPeopleByCpf(cpf);

    if (!cliente) {
      throw new Error("Cliente não encontrado com este CPF.");
    }

    return cliente;
  }
}
