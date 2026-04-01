"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class FirstScreen {
    mainMenu() {
        console.log("Bem vindo ao Sistema Nice Market!");
        const prompt = (0, prompt_sync_1.default)();
        let escolha = Number(prompt("escolha"));
        let open = true;
        while (open) {
            escolha = Number(prompt("escolha"));
            switch (escolha) {
                case 1:
                    console.log("Caso 1");
                    break;
                case 2:
                    open = false;
                    console.log("Fecheou");
                    break;
                default:
                    break;
            }
        }
    }
}
exports.default = FirstScreen;
let teste = new FirstScreen();
teste.mainMenu();
