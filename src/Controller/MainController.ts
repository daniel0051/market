import Database from "../database/Database";
import Product from "../models/Product";
import FirstScreen from "../view/FirstScreen";
import promptSync from "prompt-sync";

export default class MainController {
  public database: Database = new Database();
  private prompt = promptSync();

  public getNewProduct(): Product {
    return new Product();
  }

  public findProductById(id: number): Product | undefined {
    return this.database.findById(id);
  }
}
