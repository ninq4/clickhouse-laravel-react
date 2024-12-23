import { CartModel } from "@/entities/Cart";
import { Button } from "@/shared/ui/Button/Button";
import { observer } from "mobx-react-lite";
import React from "react";

export const MakeOrder = observer(() => {
    const store = CartModel.CartStore;
    return (
        <div className="flex flex-col items-end gap-4 w-full pt-8">
            <p className="text-[30px] font-semibold">
                Общая сумма {store.totalPrice} ₽
            </p>
            <div className="flex items-center justify-between w-full">
                <button
                    onClick={() => store.clear()}
                    className="text-black underline flex-1 flex"
                >
                    Очистить корзину
                </button>
                <Button>Оформить заказ</Button>
            </div>
        </div>
    );
});
