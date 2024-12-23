import { makeAutoObservable } from "mobx";
import { TProductInCart } from "./types";

class CartStore {
    products: TProductInCart[] = [];
    totalPrice: number = 0;

    constructor() {
        makeAutoObservable(this);
        this.init();
    }

    init() {
        const cart = localStorage.getItem("cart");
        this.products = JSON.parse(cart || "[]");
        this.calculateTotalPrice();
    }

    calculateTotalPrice() {
        this.totalPrice = this.products.reduce(
            (acc, item) => acc + item.price * item.quantity || 0,
            0
        );
    }

    get getAll() {
        return this.products;
    }

    addProduct(product: TProductInCart) {
        const existingItem = this.products.find(
            (item) => item.id === product.id
        );

        if (existingItem?.quantity) {
            existingItem.quantity++;
        } else {
            this.products.push({
                ...product,
                quantity: 1,
            });
        }

        this.calculateTotalPrice();
        localStorage.setItem("cart", JSON.stringify(this.products));
    }

    removeProduct(product: TProductInCart) {
        const itemIndex = this.products.findIndex(
            (item) => item.id === product.id
        );

        if (itemIndex !== -1) {
            const item = this.products[itemIndex];
            if (item.quantity === 1) {
                this.products.splice(itemIndex, 1);
            } else {
                item.quantity--;
            }
            this.calculateTotalPrice();
            localStorage.setItem("cart", JSON.stringify(this.products));
        }
    }

    get getProductOnOrder() {
        const products = this.products.reduce((acc, item) => {
            acc[item.id] = item.quantity;
            return acc;
        }, {} as Record<string, number>);

        const resultData = {
            ...products,
        };
        return resultData;
    }

    get getTotalPrice() {
        return this.totalPrice;
    }
    clear() {
        this.products = [];
        this.calculateTotalPrice();
        localStorage.removeItem("cart");
    }
}

export default new CartStore();
