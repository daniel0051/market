import { validarCPF } from "../common/validators/validateCpf";

export default class People {
  readonly cpf: string = "";
  private name: string = "";
  private tel: string = "";
  private email: string;
  private discount: number = 0;

  constructor(name: string, tel: string, cpf: string);

  constructor(name: string, tel: string, cpf: string, email: string);

  constructor(name: string, tel: string, cpf: string, email?: string) {
    this.name = name;
    this.cpf = cpf;
    this.tel = tel;
    this.email = email || "";

    if (!validarCPF(cpf)) {
      console.error("CPF Inválido");
    }
  }

  public setDiscount(percentage: number): void {
    this.discount = percentage / 100;
  }

  public getDiscount(): number {
    return this.discount;
  }

  public getName(): string {
    return this.name;
  }
}
