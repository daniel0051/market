export interface IPeopleInput {
  name: string;
  tel: string;
  cpf: string;
  email?: string;
}

export interface IProductInput {
  id: number;
  name: string;
  basePrice: number;
  expirationDate?: string;
  warranty?: number;
  weight?: number;
}

export interface AppResponse<T> {
  success: boolean;
  data: T | null;
  message: string;
}
