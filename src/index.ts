import PerishableProduct from "./models/PerishableProduct";
import Checkout, { PaymentMethod } from "./models/Checkout";
import ElectronicProduct from "./models/ElectronicProduct";
import ProductByWeight from "./models/ProductByWeight";

let frango: PerishableProduct = new PerishableProduct(
  1,
  "Frango Seara 1kg",
  17.88,
  "2026-06-02",
);

let tv: ElectronicProduct = new ElectronicProduct(
  49,
  "Tv 49' 4k - LG",
  2400,
  12,
);

let fruta: ProductByWeight = new ProductByWeight(2, "Maça funji", 7, 1.2);

let caixa01: Checkout = new Checkout();
caixa01.addItems(frango, tv, fruta);

console.log(caixa01.calculateTotal());
tv.extendWarranty(6);
console.log(caixa01.calculateTotal());
caixa01.finishSale(PaymentMethod.PIX);
