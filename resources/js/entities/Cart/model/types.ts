import { TProduct } from "@/entities/Product/types";

export type TProductInCart = TProduct & {
    quantity: number;
};
