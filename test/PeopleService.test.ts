import { PeopleNotFoundError } from "../src/common/errors/BusinessError";
import Database from "../src/database/Database";
import PeopleService from "../src/service/PeopleService";
import { IPeopleInput } from "../src/types/interfaces";

describe("PeopleService - Testes Unitários", () => {
  let database: Database;
  let peopleService: PeopleService;

  beforeEach(() => {
    database = new Database();
    peopleService = new PeopleService(database);
  });

  it("deve cadastrar pessoa e retornar uma pessoa cadastrada com sucesso", () => {
    const mockPeopleData: IPeopleInput = {
      name: "Daniel",
      tel: "99999999",
      cpf: "111.444.777-35",
      email: "",
    };

    const result = peopleService.register(mockPeopleData);

    expect(result).toBeDefined();
    expect(result.getName()).toBe("Daniel");
    expect(result.getCpf()).toBe("111.444.777-35");
  });

  it("deve lançar ProductNotFoundError se o produto buscado não existir", () => {
    expect(() => {
      peopleService.searchCpf("999");
    }).toThrow(PeopleNotFoundError);
  });
});
