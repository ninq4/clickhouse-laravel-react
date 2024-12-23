import React from "react";
import { TProps } from "./types";
import { getStorageImage } from "@/shared/lib/utils/formatImage/formatImage";
import { AddCard } from "@/features/Cart/AddCard/ui/AddCard";

export const ProductInCart = (props: TProps) => {
    return (
        <div className="flex items-start border-b-[1px] justify-between w-full h-[252px] border-b-[#E9E5E5]">
            <div className=" gap-[24px] flex ">
                <img
                    className="w-[200px] h-[200px]"
                    src={getStorageImage(props.images[0])}
                    alt=""
                />
                <div className="flex flex-col justify-between flex-grow-1 h-full">
                    <div className="flex flex-col gap-2">
                        <p className="font-bold text-[18px]">{props.name}</p>
                        {props.is_stock ? (
                            <p className="text-[14px] text-[#7d7d7d]">
                                В наличии
                            </p>
                        ) : (
                            <p className="text-[14px] text-[#7d7d7d]">
                                Нет в наличии
                            </p>
                        )}
                    </div>
                    <p>{props.price} ₽</p>
                </div>
            </div>
            <div className="">
                <AddCard {...props} />
            </div>
        </div>
    );
};
