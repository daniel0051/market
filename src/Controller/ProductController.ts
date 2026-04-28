import { ProductType } from "../models/Product";
import ProductService from "../service/ProductService";

export default class ProductController {
  constructor(public productService: ProductService) {}

  public save(type: ProductType, productData: any): void {
    try {
      this.productService.register(type, productData);
      console.log(
        "\n[Controller] Processo de cadastro finalizado com sucesso.",
      );
    } catch (e: any) {
      console.log(`\n[Controller] Erro ao cadastrar: ${e.message}`);
    }
  }

  public displaySearch() {
    const id = Number(prompt("Digite o ID: "));
    try {
      const product = this.productService.searchProduct(id);
      console.log(
        `Produto: ${product.getName()} - R$ ${product.getBasePrice()}`,
      );
    } catch (e: any) {
      console.log(e.message);
    }
  }
}
