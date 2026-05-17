import PromptSync from "prompt-sync";
import ProductController from "../controller/ProductController";
import { ProductNotFoundError } from "../common/errors/BusinessError";

export class ProductSearch {
  private prompt = PromptSync();

  constructor(private ProductController: ProductController) {}

  public productSearch(): void {
    console.log("--- Buscar produto ---");
    const idInput = parseInt(this.prompt("Insira o ID do produto: "));

    if (isNaN(idInput)) {
      console.log("\n[Aviso]: O ID inserido precisa ser um número válido.");
      return;
    }

    try {
      const product = this.ProductController.findById(idInput);

      console.log("\n=========================");
      console.log(`Produto Encontrado: ${product.getName()}`);
      console.log(`Preço Base: R$ ${product.getBasePrice().toFixed(2)}`);
      console.log(
        `Preço Final: R$ ${product.calculateFinalPrice().toFixed(2)}`,
      );
      console.log("=========================");
    } catch (error: unknown) {
      if (error instanceof ProductNotFoundError) {
        console.log(`\n[Consulta]: ${error.message}`);
      } else if (error instanceof Error) {
        console.log(`\n[Erro]: ${error.message}`);
      }
    }
  }
}
