"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(id, name, basePrice) {
        this.id = 0;
        this.name = "";
        this.basePrice = 0;
        this.type = "";
        this.id = id;
        this.name = name;
        this.basePrice = basePrice;
        this.type = this.constructor.name;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getBasePrice() {
        return this.basePrice;
    }
    getType() {
        return this.type;
    }
    setBasePrice(newPrice) {
        if (newPrice > 0)
            this.basePrice = newPrice;
    }
}
exports.default = Product;
