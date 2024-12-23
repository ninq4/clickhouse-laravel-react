import React from "react";
import Cart from "@/app/assets/icons/addCart.svg?react";
import { observer } from "mobx-react-lite";
import { CartModel } from "@/entities/Cart";
import { TProps } from "./types";
import { useAddProductToCartModel } from "../model";

export const AddCard = observer((props: TProps) => {
    const store = CartModel.CartStore;

    const findProductInCart = store.getAll.find(
        (product) => product.id === props.id
    );
    const cartModel = useAddProductToCartModel({
        ...props,
        quantity: findProductInCart?.quantity || 0,
    });
    const onRemove = (e: React.MouseEvent) => {
        e.preventDefault();
        cartModel.removeProduct();
    };
    const onAdd = (e: React.MouseEvent) => {
        e.preventDefault();
        cartModel.addProduct();
    };

    return (
        <div className="flex justify-between items-end">
            {findProductInCart ? (
                <button
                    onClick={onRemove}
                    className="bg-[#FF9900] h-[26px] w-[26px] rounded-full flex items-center justify-center text-white text-[30px]"
                >
                    -
                </button>
            ) : (
                <div />
            )}
            <p className="text-[24px] font-bold">
                {findProductInCart?.quantity}
            </p>
            <button
                onClick={onAdd}
                className="bg-[#FF9900] h-[48px] w-[48px] rounded-full flex items-center justify-center"
            >
                <Cart />
            </button>
        </div>
    );
});
