import SaleService from "../service/SaleService";
import Checkout from "../models/Checkout";

export default class SaleController {
  constructor(public saleService: SaleService) {}

  public fecharCarrinho(checkout: Checkout): void {
    try {
      this.saleService.finalizarVenda(checkout);
    } catch (e: any) {
      console.log(`Erro ao finalizar: ${e.message}`);
    }
  }
}
