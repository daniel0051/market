import {
  ProductNotFoundError,
  ValidationError,
} from "@/common/errors/BusinessError";
import Database from "@/database/Database";
import { ProductType } from "@/models/Product";
import ProductService from "@/service/ProductService";
import { IProductInput } from "@/types/interfaces";

describe("ProductService - Testes Unitários", () => {
  let database: Database;
  let productService: ProductService;

  beforeEach(() => {
    database = new Database();
    productService = new ProductService(database);
  });

  it("[Esperado] deve cadastrar e retornar um produto com sucesso sob condições ideais", () => {
    const mockProductData: IProductInput = {
      id: 1,
      name: "Feijão Preto",
      basePrice: 8.5,
      expirationDate: "2026-12-31",
    };

    const result = productService.register(
      ProductType.PERISHABLE,
      mockProductData,
    );

    expect(result).toBeDefined();
    expect(result.getId()).toBe(1);
    expect(result.getName()).toBe("Feijão Preto");
  });

  it("[Falha] deve lançar ProductNotFoundError se o produto buscado não existir", () => {
    expect(() => {
      productService.searchProduct(999);
    }).toThrow(ProductNotFoundError);
  });

  it("[Limite] deve lançar ValidationError se o preço base do produto for igual a zero", () => {
    const mockProductData: IProductInput = {
      id: 2,
      name: "Sal Refinado",
      basePrice: 0,
      expirationDate: "2026-12-31",
    };

    expect(() => {
      productService.register(ProductType.PERISHABLE, mockProductData);
    }).toThrow(ValidationError);
  });
});
