import promptSync from "prompt-sync";

export default class FirstScreen {
  public mainMenu(): void {
    console.log("Bem vindo ao Sistema Nice Market!");
    const prompt = promptSync();

    let escolha: number = Number(prompt("escolha"));
    let open: boolean = true;
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

let teste = new FirstScreen();
teste.mainMenu();
