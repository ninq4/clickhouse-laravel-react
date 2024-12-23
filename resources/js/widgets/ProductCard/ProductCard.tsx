import { Link } from "@inertiajs/react";
import { TProps } from "./types";
import { getStorageImage } from "@/shared/lib/utils/formatImage/formatImage";
import clsx from "clsx";

export const ProductCard = (props: TProps) => {
    const priceClassname = clsx(
        "text-[30px] font-bold",
        props.is_sale ? "text-red-500" : "text-black"
    );
    const titleClassname = clsx(
        "text-[18px] font-regular",
        props.is_sale ? "text-red-500" : "text-black"
    );
    return (
        <Link
            className="shadow-inset rounded-[30px] w-[300px]"
            href={props.slug}
        >
            <img
                className="rounded-[30px] object-cover h-[290px]"
                src={getStorageImage(props.images[0])}
                alt=""
            />
            <div className="p-4">
                <p className={titleClassname}>{props.name}</p>
                <p className={priceClassname}>{props.price} ₽</p>
                {props.children}
            </div>
        </Link>
    );
};
