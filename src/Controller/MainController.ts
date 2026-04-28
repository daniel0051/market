import Database from "../database/Database";
import PeopleService from "../service/PeopleService";
import ProductService from "../service/ProductService";
import SaleService from "../service/SaleService";
import PeopleController from "./PeopleController";
import ProductController from "./ProductController";
import SaleController from "./SaleController";

export default class MainController {
  private database: Database = new Database();

  public peopleCtrl: PeopleController;
  public productCtrl: ProductController;
  public saleCtrl: SaleController;

  constructor() {
    const peopleService = new PeopleService(this.database);
    const productService = new ProductService(this.database);
    const saleService = new SaleService(this.database);

    this.peopleCtrl = new PeopleController(peopleService);
    this.productCtrl = new ProductController(productService);
    this.saleCtrl = new SaleController(saleService);
  }
}
