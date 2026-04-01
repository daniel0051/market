"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = __importDefault(require("./Product"));
class ProductByWeight extends Product_1.default {
    constructor(id, name, price, weight) {
        super(id, name, price);
        this.weight = 0;
        this.weight = weight;
    }
    setWeight(weight) {
        if (weight > 0)
            this.weight = weight;
    }
    getWeight() {
        return this.weight;
    }
    calculateFinalPrice() {
        return this.getBasePrice() * this.weight;
    }
}
exports.default = ProductByWeight;
