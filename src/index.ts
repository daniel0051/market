import MainController from "./controller/MainController";
import FirstScreen from "./view/FirstScreen";

const main = new MainController();

new FirstScreen(main).mainMenu();
