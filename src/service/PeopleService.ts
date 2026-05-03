import Database from "../database/Database";
import People from "../models/People";

export default class PeopleService {
  constructor(private database: Database) {}

  public register(input: any) {
    const newPeople = input.email
      ? new People(input.name, input.tel, input.cpf, input.email)
      : new People(input.name, input.tel, input.cpf);

    newPeople.setDiscount(5);
    this.database.savePeople(newPeople);
    return newPeople;
  }

  public searchCpf(cpf: string): People {
    const client = this.database.findPeopleByCpf(cpf);

    if (!client) {
      throw new Error("Cliente não encontrado com este CPF.");
    }

    return client;
  }
}
