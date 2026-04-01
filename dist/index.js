"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PerishableProduct_1 = __importDefault(require("./models/PerishableProduct"));
const Checkout_1 = __importStar(require("./models/Checkout"));
const ElectronicProduct_1 = __importDefault(require("./models/ElectronicProduct"));
const ProductByWeight_1 = __importDefault(require("./models/ProductByWeight"));
let frango = new PerishableProduct_1.default(1, "Frango Seara 1kg", 17.88, "2026-06-02");
let tv = new ElectronicProduct_1.default(49, "Tv 49' 4k - LG", 2400, 12);
let fruta = new ProductByWeight_1.default(2, "Maça funji", 7, 1.2);
let caixa01 = new Checkout_1.default();
caixa01.addItems(frango, tv, fruta);
console.log(caixa01.calculateTotal());
tv.extendWarranty(6);
console.log(caixa01.calculateTotal());
caixa01.finishSale(Checkout_1.PaymentMethod.PIX);
