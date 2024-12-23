import { TProduct } from "@/entities/Product/types";
import { ReactNode } from "react";

export type TProps = TProduct & {
    children?: ReactNode;
};
