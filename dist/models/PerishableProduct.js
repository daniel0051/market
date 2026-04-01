"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = __importDefault(require("./Product"));
class PerishableProduct extends Product_1.default {
    constructor(id, name, price, date) {
        super(id, name, price);
        this.dateValidity = new Date(date);
        this.dateValidity.setHours(0, 0, 0, 0);
    }
    getDateValidity() {
        return this.dateValidity.toLocaleDateString("pt-BR");
    }
    isExpired() {
        return new Date() > this.dateValidity;
    }
    calculateFinalPrice() {
        if (this.isExpired())
            return 0;
        const hoje = new Date().getTime();
        const vencimento = this.dateValidity.getTime();
        const diferencaEmMs = vencimento - hoje;
        const dezDiasEmMs = 10 * 24 * 60 * 60 * 1000;
        if (diferencaEmMs <= dezDiasEmMs) {
            return this.getBasePrice() * 0.8;
        }
        return this.getBasePrice();
    }
}
exports.default = PerishableProduct;
