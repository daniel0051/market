"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethod = void 0;
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["CASH"] = "Dinheiro";
    PaymentMethod["CARD"] = "Cart\u00E3o";
    PaymentMethod["PIX"] = "PIX";
})(PaymentMethod || (exports.PaymentMethod = PaymentMethod = {}));
class Checkout {
    constructor() {
        this.listItens = [];
        this.formPayment = "";
    }
    addItems(...products) {
        this.listItens.push(...products);
    }
    calculateTotal() {
        let total = 0;
        this.listItens.forEach((item) => {
            total += item.calculateFinalPrice();
        });
        return total;
    }
    finishSale(method) {
        if (this.listItens.length === 0)
            return console.log("Carrinho vazio! Adicione itens antes de pagar.");
        this.formPayment = method;
        const total = this.calculateTotal();
        console.log(`--- VENDA FINALIZADA ---`);
        console.log(`Total: R$ ${total.toFixed(2)}`);
        console.log(`Pago com: ${this.formPayment}`);
    }
}
exports.default = Checkout;
