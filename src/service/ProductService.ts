import Database from "../database/Database";
import Product, { ProductType } from "../models/Product";
import PerishableProduct from "../models/PerishableProduct";
import ElectronicProduct from "../models/ElectronicProduct";
import ProductByWeight from "../models/ProductByWeight";

export default class ProductService {
  constructor(private database: Database) {}

  public register(type: ProductType, productData: any): void {
    let product: Product;

    switch (type) {
      case ProductType.PERISHABLE:
        const p = new PerishableProduct();
        if (productData.validade) p.setDateValidity(productData.validade);
        product = p;
        break;

      case ProductType.ELECTRONIC:
        const e = new ElectronicProduct();
        if (productData.garantia) e.setWarrantyMonths(productData.garantia);
        product = e;
        break;

      case ProductType.WEIGHT:
        const w = new ProductByWeight();
        if (productData.peso) w.setWeight(productData.peso);
        product = w;
        break;
      default:
        throw new Error("Tipo de produto inválido");
    }

    product.setId(productData.id);
    product.setName(productData.nome);
    product.setBasePrice(productData.preco);

    this.database.saveProduct(product);
  }

  public searchProduct(id: number) {
    const product = this.database.findProductById(id);
    if (!product) throw new Error("Produto não encontrado!");
    return product;
  }
}
