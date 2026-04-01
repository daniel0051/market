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
        let choice;
        let open = true;
        while (open) {
            console.log("[1] - Cadastramento de Produtos");
            choice = Number(prompt("Escolha um das opções"));
            switch (choice) {
                case 1:
                    console.log("Caso 1");
                    break;
                case 2:
                    open = false;
                    console.log("Fechou");
                    break;
                default:
                    break;
            }
        }
    }
}
exports.default = FirstScreen;
