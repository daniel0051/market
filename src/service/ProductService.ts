import Database from "../database/Database";
import Product, { ProductType } from "../models/Product";
import PerishableProduct from "../models/PerishableProduct";
import ElectronicProduct from "../models/ElectronicProduct";
import ProductByWeight from "../models/ProductByWeight";
import { IProductInput } from "../types/interfaces";
import {
  ProductNotFoundError,
  ValidationError,
} from "../common/errors/BusinessError";

export default class ProductService {
  constructor(private database: Database) {}

  public register(type: ProductType, productData: IProductInput): Product {
    if (productData.basePrice <= 0) {
      throw new ValidationError(
        "basePrice",
        "O preço do produto deve ser maior que zero.",
      );
    }

    let product: Product;

    switch (type) {
      case ProductType.PERISHABLE:
        const p = new PerishableProduct();
        if (productData.expirationDate)
          p.setDateValidity(productData.expirationDate);
        product = p;
        break;

      case ProductType.ELECTRONIC:
        const e = new ElectronicProduct();
        if (productData.warranty) e.setWarrantyMonths(productData.warranty);
        product = e;
        break;

      case ProductType.WEIGHT:
        const w = new ProductByWeight();
        if (productData.weight) w.setWeight(productData.weight);
        product = w;
        break;
      default:
        throw new Error("Tipo de produto inválido");
    }

    product.setId(productData.id);
    product.setName(productData.name);
    product.setBasePrice(productData.basePrice);

    this.database.saveProduct(product);
    return product;
  }

  public searchProduct(id: number): Product {
    return this.database.findOrThrow(
      this.database.getProducts(),
      (p) => p.getId() === id,
      new ProductNotFoundError(id),
    );
  }
}
