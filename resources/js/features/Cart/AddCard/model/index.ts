import { CartModel } from "@/entities/Cart";
import { TProductInCart } from "@/entities/Cart/model/types";

export const useAddProductToCartModel = (product: TProductInCart) => {
    const store = CartModel.CartStore;
    const addProduct = () => store.addProduct(product);
    const removeProduct = () => store.removeProduct(product);
    return { addProduct, removeProduct };
};
