export class BusinessError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "BusinessError";
  }
}

export class ProductNotFoundError extends Error {
  constructor(id: number) {
    super(`Produto com ID ${id} não foi encontrado no sistema.`);
    this.name = "ProductNotFoundError";
  }
}

export class ValidationError extends Error {
  constructor(field: string, reason: string) {
    super(`Erro de validação no campo "${field}": ${reason}`);
    this.name = "ValidationError";
  }
}
