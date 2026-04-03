import MainController from "./Controller/MainController";
import FirstScreen from "./view/FirstScreen";

const controller: MainController = new MainController();
new FirstScreen(controller);
