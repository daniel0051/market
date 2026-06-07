import PromptSync from "prompt-sync";
import ProductController from "../controller/ProductController";

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

    const response = this.ProductController.findById(idInput);
    if (!response.success || !response.data) {
      console.log(`\n[Consulta]: ${response.message}`);
      return;
    }

    const product = response.data;

    console.log("\n=========================");
    console.log(`Produto Encontrado: ${product.getName()}`);
    console.log(`Preço Base: R$ ${product.getBasePrice().toFixed(2)}`);
    console.log(`Preço Final: R$ ${product.calculateFinalPrice().toFixed(2)}`);
    console.log("=========================");
  }
}
