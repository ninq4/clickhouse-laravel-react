import { Link } from "@inertiajs/react";
import React from "react";
import { Props } from "./types";

export const CategoryCard = (props: Props) => {
    return (
        <Link
            className="flex items-center justify-center flex-col gap-2 w-[240px] h-[180px] rounded-[30px] shadow-inset bg-[linear-gradient(135deg, #fff 0%, #fff 100%)]"
            href={props.slug || "#"}
        >
            <img className="rounded-[30px]" src={`storage/${props.image}`} alt="" />
            <p className="text-[18px] font-regular">{props.name}</p>
        </Link>
    );
};
