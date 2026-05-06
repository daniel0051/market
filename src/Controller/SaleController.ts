import SaleService from "../service/SaleService";
import Checkout from "../models/Checkout";
import PeopleService from "../service/PeopleService";
import ProductService from "../service/ProductService";

export default class SaleController {
  constructor(
    private saleService: SaleService,
    private peopleService: PeopleService,
    private productService: ProductService,
  ) {}

  public foundCustomer(cpf: string) {
    return this.peopleService.searchCpf(cpf);
  }

  public searchProduct(id: number) {
    return this.productService.searchProduct(id);
  }

  public fecharCarrinho(checkout: Checkout): void {
    try {
      this.saleService.finalizarVenda(checkout);
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.log(`\n[Controller] Erro ao finalizar: ${e.message}`);
      }
    }
  }
}
