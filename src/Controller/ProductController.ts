import { ProductType } from "../models/Product";
import ProductService from "../service/ProductService";
import { IProductInput } from "../types/interfaces";

export default class ProductController {
  constructor(public productService: ProductService) {}

  public save(type: ProductType, productData: IProductInput): void {
    try {
      this.productService.register(type, productData);
      console.log(
        "\n[Controller] Processo de cadastro finalizado com sucesso.",
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.log(`\n[Controller] Erro ao cadastrar: ${e.message}`);
      } else {
        console.log(`\n[Controller] Erro desconhecido: ${String(e)}`);
      }
    }
  }

  public displaySearch() {
    const id = Number(prompt("Digite o ID: "));
    try {
      const product = this.productService.searchProduct(id);
      console.log(
        `Produto: ${product.getName()} - R$ ${product.getBasePrice()}`,
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.log(e.message);
      }
    }
  }
}
