import { PeopleNotFoundError } from "../common/errors/BusinessError";
import Database from "../database/Database";
import People from "../models/People";
import { IPeopleInput } from "../types/interfaces";

export default class PeopleService {
  constructor(private database: Database) {}

  public register(input: IPeopleInput) {
    const newPeople = input.email
      ? new People(input.name, input.tel, input.cpf, input.email)
      : new People(input.name, input.tel, input.cpf);

    newPeople.setDiscount(5);
    this.database.savePeople(newPeople);
    return newPeople;
  }

  public searchCpf(cpf: string): People {
    return this.database.findOrThrow(
      this.database.getCustomers(),
      (p) => p.cpf === cpf,
      new PeopleNotFoundError(cpf),
    );
  }
}
