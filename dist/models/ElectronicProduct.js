"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = __importDefault(require("./Product"));
class ElectronicProduct extends Product_1.default {
    constructor(id, name, price, months) {
        super(id, name, price);
        this.warrantyMonths = 0;
        this.warrantyMonths = months;
    }
    getWarrantyMonths() {
        return this.warrantyMonths;
    }
    extendWarranty(extraMonths) {
        if (extraMonths > 0)
            this.warrantyMonths += extraMonths;
    }
    calculateFinalPrice() {
        let finalPrice = this.getBasePrice();
        if (this.warrantyMonths > 12) {
            const extraMonths = this.warrantyMonths - 12;
            const warrantyCost = this.getBasePrice() * (extraMonths * 0.01);
            finalPrice += warrantyCost;
        }
        return finalPrice;
    }
}
exports.default = ElectronicProduct;
